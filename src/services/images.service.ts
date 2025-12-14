import { imagesRepo } from "../repositories/images.repository";
import { eventsRepo } from "../repositories/events.repository";

async function uploadImages(
  eventId: number,
  files: Express.Multer.File[]
) {
  const event = await eventsRepo.findOneBy({ "id" :eventId});

  if (!event) {
    const error = new Error("Event not found");
    // @ts-ignore
    error.status = 404;
    throw error;
  }

  const imagesData = files.map(file => ({
    event,
    filename: file.filename,
    path: file.path,
    mimetype: file.mimetype,
    size: file.size,
  }));

  return imagesRepo.createMany(imagesData);
}


export const imagesService = {
    uploadImages,
}
