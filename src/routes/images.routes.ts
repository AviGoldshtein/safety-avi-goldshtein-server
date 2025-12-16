import express from "express";
import { upload } from "../middlewares/upload";
import { 
    getEventImages, 
    uploadImages,
    deleteEventImages
} from "../controllers/images.controller";


export const imagesRouter = express.Router({ mergeParams: true });

imagesRouter.route("/")
    .get(getEventImages)
    .post(upload.array("files", 10), uploadImages)
    .delete(deleteEventImages);
