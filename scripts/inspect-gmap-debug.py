from pathlib import Path
import re

h = Path("resources/gmap-debug.html").read_text(encoding="utf-8", errors="ignore")
print("len", len(h))
for pat in [
    "jftiEf",
    "wiI7pd",
    "kvMYJc",
    "data-review-id",
    "Reviews",
    "review",
    "F7nice",
    "fontBodyMedium",
    "GQjSyb",
    "MyEned",
    "d4r55",
    "rsqaWe",
]:
    print(pat, h.count(pat))

stars = re.findall(r'aria-label="([^"]*star[^"]*)"', h, re.I)
print("star labels", len(stars))
for s in stars[:30]:
    print(" ", s)

# snippet around first 'star'
idx = h.lower().find("star")
print("first star idx", idx)
if idx > 0:
    print(h[max(0, idx - 200) : idx + 400])
