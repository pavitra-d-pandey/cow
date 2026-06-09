#!/usr/bin/env python3
"""Clean avatar-style placeholders for people slots (gradient + silhouette)."""
import os
from PIL import Image, ImageDraw

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")

PEOPLE = {
    "farmer-1.jpg": ((46, 139, 79), (20, 54, 31)),
    "farmer-2.jpg": ((232, 130, 31), (201, 106, 16)),
    "farmer-3.jpg": ((34, 107, 56), (13, 38, 21)),
    "team-1.jpg": ((28, 74, 43), (13, 38, 21)),
    "team-2.jpg": ((46, 139, 79), (28, 74, 43)),
    "team-3.jpg": ((232, 130, 31), (201, 106, 16)),
    "team-4.jpg": ((34, 107, 56), (20, 54, 31)),
}
S = 500


def make(fn, c1, c2):
    img = Image.new("RGB", (S, S), c1)
    d = ImageDraw.Draw(img)
    for y in range(S):
        f = y / S
        col = tuple(int(c1[i] + (c2[i] - c1[i]) * f) for i in range(3))
        d.line([(0, y), (S, y)], fill=col)
    light = tuple(min(255, int(x + (255 - x) * 0.85)) for x in c1)
    # head
    hr = S * 0.16
    cx, cy = S / 2, S * 0.40
    d.ellipse([cx - hr, cy - hr, cx + hr, cy + hr], fill=light)
    # shoulders
    bw, bh = S * 0.46, S * 0.40
    d.ellipse([cx - bw / 2, S * 0.60, cx + bw / 2, S * 0.60 + bh * 2], fill=light)
    img.save(os.path.join(OUT, fn), "JPEG", quality=88)


for fn, (c1, c2) in PEOPLE.items():
    make(fn, c1, c2)
print(f"Avatars: {len(PEOPLE)} generated")
