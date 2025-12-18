import { AppDataSource } from "../data-source";
import { Image } from "../entities/Image";


const repo = AppDataSource.getRepository(Image);

async function createMany(images: Partial<Image>[]) {
  const entities = repo.create(images);
  return repo.save(entities);
}

async function findByEventId(eventId: string) {
  return repo.find({
    where: { event: { id: eventId } },
  });
}


export const imagesRepo = {
  createMany,
  findByEventId,
};