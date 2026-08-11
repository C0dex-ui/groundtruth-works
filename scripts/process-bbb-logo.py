"""Make BBB logo outer background transparent while keeping white inside the seal."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "bbb-logo-ref.png"
# Fallback to existing logo if ref missing
if not SRC.exists():
    SRC = ROOT / "public" / "images" / "bbb-logo.png"
OUT = ROOT / "public" / "images" / "bbb-logo.png"


def main() -> None:
    ref = Image.open(SRC).convert("RGBA")
    arr = np.array(ref)
    h, w = arr.shape[:2]

    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    near_white = (r > 240) & (g > 240) & (b > 240) & (a > 200)
    blue = (b > r + 30) & (b > 90) & (a > 200)

    content = blue | ((~near_white) & (a > 200))
    ys, xs = np.where(content)
    if len(xs) == 0:
        raise SystemExit("No logo content detected")

    by, bx = np.where(blue)
    bminx, bmaxx = int(bx.min()), int(bx.max())
    bminy, bmaxy = int(by.min()), int(by.max())

    # Left torch panel is roughly square relative to logo height
    panel_w = int(round((bmaxy - bminy + 1) * 0.95))
    logo_left = max(0, bminx - panel_w)
    logo_right = bmaxx
    logo_top = bminy
    logo_bottom = bmaxy
    radius = max(8, int((logo_bottom - logo_top + 1) * 0.22))

    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle(
        [logo_left, logo_top, logo_right, logo_bottom],
        radius=radius,
        fill=255,
    )
    mask = mask.filter(ImageFilter.MaxFilter(3))
    m = np.array(mask)

    out = arr.copy()
    out[m < 128] = [0, 0, 0, 0]

    # Inside the seal: keep blue; force pure white for the torch panel background
    inside = m >= 128
    whiteish = inside & (out[:, :, 0] > 240) & (out[:, :, 1] > 240) & (out[:, :, 2] > 240)
    transparent_inside = inside & (out[:, :, 3] < 128)
    # Left panel columns: anything not blue should be white
    left_panel = inside & (np.arange(w)[None, :] < bminx)
    not_blue = ~((out[:, :, 2] > out[:, :, 0] + 30) & (out[:, :, 2] > 90) & (out[:, :, 3] > 128))
    fill_white = whiteish | transparent_inside | (left_panel & not_blue & (out[:, :, 3] < 250))

    out[fill_white] = [255, 255, 255, 255]
    # Preserve blue strokes in left panel (torch / BBB wordmark)
    left_blue = left_panel & blue
    out[left_blue] = arr[left_blue]

    result = Image.fromarray(out, "RGBA")
    alpha = out[:, :, 3]
    ys2, xs2 = np.where(alpha > 0)
    pad = 2
    crop = result.crop(
        (
            max(0, int(xs2.min()) - pad),
            max(0, int(ys2.min()) - pad),
            min(w, int(xs2.max()) + 1 + pad),
            min(h, int(ys2.max()) + 1 + pad),
        )
    )
    crop = crop.resize((crop.width * 2, crop.height * 2), Image.Resampling.LANCZOS)
    crop.save(OUT)

    c = np.array(crop)
    print(f"saved {OUT} size={crop.size}")
    print("corner0", tuple(c[0, 0]))
    print("left-mid", tuple(c[c.shape[0] // 2, c.shape[1] // 6]))
    print("right-mid", tuple(c[c.shape[0] // 2, int(c.shape[1] * 0.7)]))


if __name__ == "__main__":
    main()
