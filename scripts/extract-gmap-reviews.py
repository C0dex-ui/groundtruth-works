"""Best-effort extract of review-like strings from a saved Google Maps HTML dump."""
from __future__ import annotations

import re
import sys
from pathlib import Path

path = Path(sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\ADMIN\AppData\Local\Temp\gmap-reviews.html")
html = path.read_text(encoding="utf-8", errors="ignore")
print("len", len(html))
print("review mentions", html.lower().count("review"))

# Decode unicode escapes later if needed
# Look for APP_INITIALIZATION_STATE blob
m = re.search(r"window\.APP_INITIALIZATION_STATE\s*=\s*(\[.*?\]);\s*\n?window\.", html, re.S)
print("APP_INIT found", bool(m), "blob", len(m.group(1)) if m else 0)

# Common Maps embed: long quoted prose strings
strings = re.findall(r'"((?:[^"\\]|\\.){40,800})"', html)
print("quoted strings 40-800", len(strings))

# Filter for review-like (has spaces, letters, maybe punctuation)
reviewish = []
for s in strings:
    t = bytes(s, "utf-8").decode("unicode_escape", errors="ignore") if "\\u" in s else s
    t = t.replace("\\n", " ").replace('\\"', '"')
    if t.count(" ") < 5:
        continue
    if not re.search(r"[A-Za-z]{4,}", t):
        continue
    # skip urls/css/js-ish
    if any(x in t.lower() for x in ("function", "http", "www.", "null,", "window.", "google", "maps.")):
        continue
    if re.search(r"[{};=<>]", t):
        continue
    reviewish.append(t)

# unique preserve order
seen = set()
uniq = []
for t in reviewish:
    key = t[:80]
    if key in seen:
        continue
    seen.add(key)
    uniq.append(t)

print("reviewish", len(uniq))
for t in uniq[:40]:
    print("---")
    print(t[:400])
