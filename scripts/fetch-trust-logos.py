"""Download + optimize BBB and Google 5-star logos for hero trust cards."""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images"
TMP = Path.home() / "AppData" / "Local" / "Temp"

BBB_URLS = [
    "https://www.advantageplusfinancing.com/wp-content/uploads/2023/12/bbb-button.png",
    "https://i0.wp.com/www.advantageplusfinancing.com/wp-content/uploads/2023/12/bbb-button.png?fit=500%2C242&ssl=1",
    "https://i0.wp.com/www.advantageplusfinancing.com/wp-content/uploads/2023/12/bbb-button.png?ssl=1",
]

GOOGLE_PAGE = "https://www.pngfind.com/mpng/hhohJ_google-5-stars-google-plus-reviews-logo-hd/"


def curl(url: str, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    r = subprocess.run(
        [
            "curl.exe",
            "-sL",
            "-A",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "-H",
            f"Referer: {url.rsplit('/', 1)[0]}/",
            "-o",
            str(dest),
            url,
        ],
        check=False,
    )
    if r.returncode != 0 or not dest.exists() or dest.stat().st_size < 500:
        return False
    # reject HTML error pages
    head = dest.read_bytes()[:20]
    if head.startswith(b"<!DOCTYPE") or head.startswith(b"<html") or head.startswith(b"{"):
        return False
    return True


def trim_and_optimize(src: Path, dest: Path, max_w: int = 480) -> None:
    im = Image.open(src).convert("RGBA")
    # Make near-white / pure white outer background transparent if solid
    pixels = im.load()
    w, h = im.size
    # flood-fill-ish: corners that are near-white → transparent
    def is_bg(px: tuple[int, int, int, int]) -> bool:
        r, g, b, a = px
        if a < 10:
            return True
        # pure/near white
        if r > 245 and g > 245 and b > 245:
            return True
        # light checker / gray page bg
        if r > 250 and g > 250 and b > 250:
            return True
        return False

    # Only clear pixels that are near-white AND connected to edge via near-white
    # Simple approach: if corners are white-ish, treat all pure white as transparent
    # but keep white that is interior of logo only if logo needs it.
    corners = [pixels[0, 0], pixels[w - 1, 0], pixels[0, h - 1], pixels[w - 1, h - 1]]
    white_corners = sum(1 for c in corners if is_bg(c))
    if white_corners >= 2:
        data = list(im.getdata())
        new_data = []
        for px in data:
            if is_bg(px):
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(px)
        im.putdata(new_data)

    # Trim transparent borders
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    # Resize if large
    if im.width > max_w:
        ratio = max_w / im.width
        im = im.resize((max_w, max(1, int(im.height * ratio))), Image.Resampling.LANCZOS)

    # Ensure alpha
    im.save(dest, format="PNG", optimize=True)
    print(f"saved {dest.name}: {im.size} {dest.stat().st_size} bytes")


def find_google_png_url(html: str) -> str | None:
    # pngfind often uses /pngs/m/... paths
    candidates = re.findall(
        r'(?:https?:)?//(?:www\.)?pngfind\.com/[^"\']+\.png',
        html,
        re.I,
    )
    candidates += re.findall(r'"(/pngs/m/[^"]+\.png)"', html)
    candidates += re.findall(r'data-src="([^"]+)"', html)
    candidates += re.findall(r'src="([^"]+\.png[^"]*)"', html)

    cleaned: list[str] = []
    for c in candidates:
        if c.startswith("//"):
            c = "https:" + c
        elif c.startswith("/"):
            c = "https://www.pngfind.com" + c
        cleaned.append(c)

    # Prefer high-res content images, skip icons/lazy
    for c in cleaned:
        low = c.lower()
        if any(x in low for x in ("lazy", "logo", "icon", "favicon", "ad", "button", "close")):
            continue
        if "pngs/m/" in low or "google" in low or "315" in low or "hhoh" in low:
            return c
    for c in cleaned:
        if c.endswith(".png") and "pngfind.com" in c:
            return c
    return cleaned[0] if cleaned else None


def main() -> None:
    # BBB
    bbb_raw = TMP / "bbb-button-raw.png"
    ok = False
    for u in BBB_URLS:
        print("try BBB", u)
        if curl(u, bbb_raw):
            ok = True
            print(" got", bbb_raw.stat().st_size)
            break
    if not ok:
        print("BBB download failed", file=sys.stderr)
        sys.exit(1)
    trim_and_optimize(bbb_raw, OUT_DIR / "bbb-logo.png", max_w=400)

    # Google page
    page_html = TMP / "pngfind-google.html"
    if not curl(GOOGLE_PAGE, page_html):
        # still try reading if partial
        pass
    html = page_html.read_text(encoding="utf-8", errors="ignore") if page_html.exists() else ""
    print("pngfind html", len(html))
    g_url = find_google_png_url(html)
    print("google url", g_url)

    # Known pngfind CDN patterns to try
    google_urls = []
    if g_url:
        google_urls.append(g_url)
    google_urls += [
        "https://www.pngfind.com/pngs/m/315-3159494_google-5-stars-google-plus-reviews-logo-hd.png",
        "https://www.pngfind.com/pngs/m/315-3159494_google-5-stars-google-plus-reviews-logo-hd-png-download.png",
        "https://www.pngfind.com/pngs/b/315-3159494_google-5-stars-google-plus-reviews-logo-hd.png",
    ]

    g_raw = TMP / "google-5star-raw.png"
    g_ok = False
    for u in google_urls:
        print("try Google", u)
        if curl(u, g_raw):
            # verify image
            try:
                Image.open(g_raw).verify()
                g_ok = True
                print(" got", g_raw.stat().st_size)
                break
            except Exception as e:
                print(" invalid image", e)
    if not g_ok:
        # dump some hints from html
        for m in re.findall(r".{0,40}pngs/m/.{0,80}", html)[:15]:
            print("hint", m)
        print("Google download failed", file=sys.stderr)
        sys.exit(1)

    trim_and_optimize(g_raw, OUT_DIR / "google-5star-logo.png", max_w=480)
    print("done")


if __name__ == "__main__":
    main()
