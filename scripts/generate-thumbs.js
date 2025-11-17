const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '..', 'src','Projects','ReverenceAndRuin','images');
const thumbsDir = path.join(imgDir, 'thumbs');
if (!fs.existsSync(thumbsDir)) fs.mkdirSync(thumbsDir);

const files = fs.readdirSync(imgDir).filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f));

(async () => {
  for (const f of files) {
    const input = path.join(imgDir, f);
    const out = path.join(thumbsDir, f);
    if (fs.existsSync(out)) {
      console.log('skipping (exists):', out);
      continue;
    }
    try {
      console.log('creating thumb for', f);
      await sharp(input).resize({ width: 300 }).toFile(out);
      console.log('created', out);
    } catch (e) {
      console.error('error processing', f, e.message);
    }
  }
})();
