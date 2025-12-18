import { Request, Response } from "express";
import { imagesService } from "../services/images.service";


export async function uploadImages(req: Request, res: Response) {
  const eventId = req.params.eventId;
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  try {
    const images = await imagesService.uploadImages(eventId, files);
    res.status(201).json(images);
  } catch (err: any) {
    res.status(err.status || 500).json({
      message: err.message || "Failed to upload images",
    });
  }
}

export async function getEventImages(req: Request, res: Response) {
  const eventId = req.params.eventId
  try {
    const images = await imagesService.getImagesByEventId(eventId);
    res.json(images);
  } catch (err: any) {
    res.status(err.status || 500).json({
      message: err.message || "Failed to retrieve images",
    });
  }
}

export async function deleteEventImages(req: Request, res: Response) {
  const eventId = req.params.eventId;
  const imageIds: string[] = req.body.imageIds;

  try {
    const result = await imagesService.deleteImages(eventId, imageIds);
    res.json({ deletedCount: result.affected ?? 0 });
  } catch (err: any) {
    res.status(err.status || 500).json({
      message: err.message || "Failed to delete images",
    });
  }
}