import { imagesRepo } from "../repositories/images.repository";
import { eventsRepo } from "../repositories/events.repository";
import { Image } from "../entities/Image";


function mapImageToResponse(img: Image) {
  return {
    id: img.id,
    url: `/uploads/${img.filename}`,
    mimetype: img.mimetype,
    size: img.size,
    createdAt: img.createdAt,
  };
}

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
    mimetype: file.mimetype,
    size: file.size,
  }));

  return imagesRepo.createMany(imagesData);
}

async function getImagesByEventId(eventId: number) {
  const event = await eventsRepo.findOneBy({ "id": eventId});
    if (!event) {
    const error = new Error("Event not found");
    // @ts-ignore
    error.status = 404;
    throw error;
  }
  const images = await imagesRepo.findByEventId(String(eventId));
  return images.map(mapImageToResponse);
}


export const imagesService = {
    uploadImages,
    getImagesByEventId,
}
