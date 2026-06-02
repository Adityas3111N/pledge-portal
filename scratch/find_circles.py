import xml.etree.ElementTree as ET
import re

tree = ET.parse('e:/Playground/pledge-portal/public/upgovlogo.svg')
root = tree.getroot()

paths = [elem for elem in root.iter() if elem.tag.endswith('path')]

def get_bbox(d_str):
    # Very simple coordinate parser
    coords = re.findall(r'[-+]?\d*\.\d+|\d+', d_str)
    if not coords:
        return None
    xs = [float(coords[i]) for i in range(0, len(coords), 2)]
    ys = [float(coords[i]) for i in range(1, len(coords), 2)]
    if not xs or not ys:
        return None
    return min(xs), min(ys), max(xs), max(ys)

for idx, path in enumerate(paths):
    d = path.attrib.get('d', '')
    transform = path.attrib.get('transform', '')
    bbox = get_bbox(d)
    print(f"Path {idx+1}: transform={transform}, bbox={bbox}")
