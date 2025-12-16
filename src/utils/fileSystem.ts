import fs from "fs/promises";
import path from "path";
import { Image } from "../entities/Image";

const UPLOADS_DIR = path.join(process.cwd(), "uploads");

export async function deleteImageFiles(images: Image[]) {
  for (const img of images) {
    const filePath = path.join(UPLOADS_DIR, img.filename);

    try {
      await fs.unlink(filePath);
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
  }
}
