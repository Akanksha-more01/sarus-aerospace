
import re

with open('temp_scrape/bundle.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for /assets/filename.ext
matches = re.findall(r'/assets/[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|svg)', content)

with open('found_images.txt', 'w') as f:
    for m in set(matches):
        f.write(m + '\n')
