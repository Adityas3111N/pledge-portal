import xml.etree.ElementTree as ET

tree = ET.parse('e:/Playground/pledge-portal/public/upgovlogo.svg')
root = tree.getroot()

print("SVG attributes:", root.attrib)

# ET namespacing can be tricky, let's just strip namespaces or find all elements containing 'path'
paths = []
for elem in root.iter():
    if elem.tag.endswith('path'):
        paths.append(elem)

print(f"Found {len(paths)} paths.")
for idx, path in enumerate(paths):
    attribs = path.attrib
    d = attribs.get('d', '')
    transform = attribs.get('transform', '')
    fill = attribs.get('fill', '')
    print(f"Path {idx+1}: transform={transform}, fill={fill}, len(d)={len(d)}, d_start={d[:100]}...")
