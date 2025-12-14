import { AppDataSource } from "../data-source";
import { Event } from "../entities/Event";

const repo = AppDataSource.getRepository(Event);

async function create(data) {
  const event = repo.create(data);
  return await repo.save(event);
}

async function findAll() {
  return repo.find();
}

async function update(eventId: number, updatedEvent) {
  await repo.update(eventId, updatedEvent);
  return repo.findOneBy({ id: eventId });
}

async function deleteEvent(eventId: number) {
  const event = await repo.findOneBy({ id: eventId });
  if (event) {
    await repo.remove(event);
  }
  return event;
}

async function findOneBy(condition: Partial<Event>) {
  return repo.findOneBy(condition);
}

export const eventsRepo = {
  create,
  findAll,
  update,
  deleteEvent,
  findOneBy,
};
