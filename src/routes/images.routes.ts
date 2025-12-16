import express from "express";

import { upload } from "../middlewares/upload";
import { getEventImages, uploadImages } from "../controllers/images.controller";
// import { imageUploadSchema } from "../validation/image.schema";

export const imagesRouter = express.Router({ mergeParams: true });


imagesRouter.route("/")
    .get(getEventImages)
    .post(upload.array("files", 10), uploadImages);
