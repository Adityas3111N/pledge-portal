import xml.etree.ElementTree as ET

tree = ET.parse('e:/Playground/pledge-portal/public/upgovlogo_backup.svg')
root = tree.getroot()

# Find all path elements
paths = []
for elem in list(root.iter()):
    if elem.tag.endswith('path'):
        paths.append(elem)

# Let's remove Path 2 and Path 3 (indices 1 and 2)
# Or let's see which path is the grey circle.
# Let's try removing Path 2 first
print("Removing path 2 and path 3...")
# ElementTree doesn't have parent pointer directly, so we find parent of paths and remove
for parent in root.iter():
    for child in list(parent):
        if child == paths[1] or child == paths[2]:
            parent.remove(child)

tree.write('e:/Playground/pledge-portal/public/upgovlogo.svg')
print("Saved modified SVG.")
