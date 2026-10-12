const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

const inputDir = path.join(__dirname, "uploads");
const outputDir = path.join(__dirname, "converted");

async function convertImages() {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(inputDir);
  const jpgFiles = files.filter((file) =>
    /\.(jpe?g)$/i.test(file)
  );

  console.log(`Found ${jpgFiles.length} JPG images`);

  for (const file of jpgFiles) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpe?g)$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    try {
      await sharp(inputPath)
        .rotate()
        .webp({ quality: 82, effort: 5 })
        .toFile(outputPath);

      console.log(`Converted: ${file} → ${outputName}`);
    } catch (error) {
      console.error(`Failed: ${file}`, error.message);
    }
  }

  console.log("Conversion finished!");
}

convertImages();


