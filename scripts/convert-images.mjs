import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = "public/images";
const QUALITY = 80;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function convert(filePath) {
  const ext = extname(filePath);
  const name = basename(filePath, ext);
  const dir = filePath.substring(0, filePath.lastIndexOf("\\") === -1 ? filePath.lastIndexOf("/") : filePath.lastIndexOf("\\"));
  const outPath = join(dir, `${name}.webp`);

  let pipeline = sharp(filePath);

  // Special case: people.png is 1.9MB but displayed at 56x24 (2x retina = 112x48)
  if (name === "people") {
    pipeline = pipeline.resize(112, 48, { fit: "cover" });
  }

  await pipeline.webp({ quality: QUALITY }).toFile(outPath);

  const origStat = await stat(filePath);
  const newStat = await stat(outPath);
  const savings = ((1 - newStat.size / origStat.size) * 100).toFixed(1);

  console.log(
    `${filePath} (${formatSize(origStat.size)}) -> ${outPath} (${formatSize(newStat.size)}) [${savings}% smaller]`
  );
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const files = await getFiles(IMAGES_DIR);
console.log(`Found ${files.length} images to convert\n`);

for (const file of files) {
  await convert(file);
}

console.log("\nDone!");
