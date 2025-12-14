import express from "express";

import { validate } from "../middlewares/validate";
import { gatAllImages, uploadImage } from "../controllers/images.controller";
import { imageUploadSchema } from "../validation/image.schema";

export const imagesRouter = express.Router();


imagesRouter.route("/")
    .get(gatAllImages)
    .post(validate(imageUploadSchema), uploadImage);
