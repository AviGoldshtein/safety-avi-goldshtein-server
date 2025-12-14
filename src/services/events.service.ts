import { CreateEventInput, UpdateEventInput } from "../validation/event.schema"
import { eventsRepo } from "../repositories/events.repository"
import { NotFoundError } from "../errors/NotFoundError";


async function getAllEventsFromDB(){
    return eventsRepo.findAll()
}

async function createEventInDB(newEvent: CreateEventInput){
    return eventsRepo.create(newEvent)
}

async function updateEventInDB(eventId: number, updatedEvent: UpdateEventInput) {
    if (!(await exists(eventId))) {
        throw new NotFoundError(`Event with id ${eventId} not found`);
    }
    return eventsRepo.update(eventId, updatedEvent);
}

async function deleteEventInDB(eventId: number){
    if (!(await exists(eventId))) {
        throw new NotFoundError(`Event with id ${eventId} not found`);
    }
    return eventsRepo.deleteEvent(eventId)
}

async function exists(eventId: number): Promise<boolean> {
    const event =  await eventsRepo.findOneBy({ id: eventId });
    return !!event;
}


export const eventsService = {
    getAllEventsFromDB,
    createEventInDB,
    updateEventInDB,
    deleteEventInDB
}
