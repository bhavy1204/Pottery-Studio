
require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

const inputDir = path.join(__dirname, "converted");
const outputFile = path.join(__dirname, "image-data.js");

const images = [];

function createAlt(filename) {
  return path
    .parse(filename)
    .name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function saveImageData() {
  const content =
    `const images = ${JSON.stringify(images, null, 2)};\n\n` +
    `export default images;\n`;

  await fs.writeFile(outputFile, content, "utf8");
}

async function uploadImages() {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Missing Cloudinary configuration in .env");
  }

  const files = (await fs.readdir(inputDir))
    .filter((file) => /\.webp$/i.test(file))
    .sort();

  if (files.length === 0) {
    console.log("No WebP images found.");
    return;
  }

  console.log(`Found ${files.length} images.\n`);

  let successful = 0;
  let failed = 0;

  // Create the output file before uploading starts.
  await saveImageData();

  for (const file of files) {
    try {
      const buffer = await fs.readFile(
        path.join(inputDir, file)
      );

      const formData = new FormData();

      formData.append(
        "file",
        new Blob([buffer], { type: "image/webp" }),
        file
      );

      formData.append("upload_preset", UPLOAD_PRESET);
      formData.append("public_id", path.parse(file).name);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error?.message || `HTTP ${response.status}`
        );
      }

      images.push({
        src: result.secure_url,
        alt: createAlt(file),
        category: "demo",
      });

      successful++;

      // Save after every successful upload.
      await saveImageData();

      console.log(`Uploaded: ${file}`);
      console.log(`URL: ${result.secure_url}\n`);
    } catch (error) {
      failed++;
      console.error(`Failed: ${file} — ${error.message}\n`);
    }
  }

  console.log("========== SUMMARY ==========");
  console.log(`Total: ${files.length}`);
  console.log(`Uploaded: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Saved image data to: ${outputFile}`);
}

uploadImages().catch((error) => {
  console.error("Upload process failed:", error.message);
  process.exitCode = 1;
});


