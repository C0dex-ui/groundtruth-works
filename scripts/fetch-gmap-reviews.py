"""Fetch / parse Google Maps HTML dumps for review text."""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

PLACE_URLS = [
    "https://www.google.com/maps/place/Growfully+LLC/@35.0462794,-92.4842289,17z/data=!4m8!3m7!1s0x87d29da3e0b11ce3:0xa8728947de885622!8m2!3d35.0462794!4d-92.4842289!9m1!1b1!16s%2Fg%2F11f4qq1fwm?hl=en",
    "https://www.google.com/maps?cid=12135628952888655458&hl=en",
    "https://www.google.com/search?q=Growfully+LLC+Mayflower+AR&hl=en",
]

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
OUTDIR = Path(sys.argv[1] if len(sys.argv) > 1 else Path.home() / "AppData/Local/Temp")


def curl(url: str, dest: Path) -> None:
    subprocess.run(
        [
            "curl.exe",
            "-sL",
            "-A",
            UA,
            "-H",
            "Accept-Language: en-US,en;q=0.9",
            "-H",
            "Cookie: CONSENT=YES+",
            "-o",
            str(dest),
            url,
        ],
        check=False,
    )


def extract(html: str) -> list[str]:
    good: list[str] = []
    # plain double-quoted
    for s in re.findall(r'"((?:[^"\\]|\\.){50,700})"', html):
        t = s.encode("utf-8").decode("unicode_escape", errors="ignore") if "\\u" in s else s
        t = t.replace("\\n", " ").replace('\\"', '"').strip()
        if t.count(" ") < 6:
            continue
        low = t.lower()
        if any(
            x in low
            for x in (
                "http",
                "function",
                "window.",
                "null,",
                "maps.",
                "google",
                "javascript",
                "cookie",
                "privacy",
                "consent",
            )
        ):
            continue
        if re.search(r"[{};<>]|\\\\u00", t):
            continue
        if not re.search(r"[A-Za-z]{4,}", t):
            continue
        good.append(t)
    # de-dupe
    seen: set[str] = set()
    out: list[str] = []
    for t in good:
        k = t[:100]
        if k in seen:
            continue
        seen.add(k)
        out.append(t)
    return out


def main() -> None:
    all_hits: list[str] = []
    for i, url in enumerate(PLACE_URLS, 1):
        dest = OUTDIR / f"gmap-fetch-{i}.html"
        print("fetch", url)
        curl(url, dest)
        html = dest.read_text(encoding="utf-8", errors="ignore")
        print(" size", len(html))
        hits = extract(html)
        print(" candidates", len(hits))
        for h in hits[:20]:
            print(" ---", h[:300])
        all_hits.extend(hits)

    # Also try decoding APP_INITIALIZATION_STATE for rating arrays
    html = (OUTDIR / "gmap-fetch-1.html").read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\.APP_INITIALIZATION_STATE\s*=\s*(\[.*?\]);", html, re.S)
    if m:
        blob = m.group(1)
        print("APP_INIT len", len(blob))
        # rating-ish: [null,null,5.0,12] patterns
        for mm in re.finditer(r"\[null,null,([0-9]\.[0-9]),([0-9]+)\]", blob):
            print(" rating_array", mm.group(1), mm.group(2))
        # long strings inside blob
        for s in re.findall(r'"((?:[^"\\]|\\.){60,500})"', blob)[:30]:
            if s.count(" ") > 6:
                print(" blobstr", s[:250])


if __name__ == "__main__":
    main()
