import { In } from "typeorm";
import { AppDataSource } from "../data-source";
import { Image } from "../entities/Image";
import { imagesRepo } from "../repositories/images.repository";
import { eventsRepo } from "../repositories/events.repository";
import { deleteImageFiles } from "../utils/fileSystem";


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
  eventId: string,
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

async function getImagesByEventId(eventId: string) {
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

export async function deleteImages(eventId: string, imgIds: string[]) {
  if (!imgIds.length) return { affected: 0 };

  return AppDataSource.transaction(async (manager) => {
    const images = await manager.find(Image, {
      where: {
        id: In(imgIds),
        event: { id: eventId },
      },
    });

    if (!images.length) return { affected: 0 };

    await deleteImageFiles(images);

    return manager.delete(Image, {
      id: In(imgIds),
      event: { id: eventId },
    });
  });
}


export const imagesService = {
    uploadImages,
    getImagesByEventId,
    deleteImages
}
