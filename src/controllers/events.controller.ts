import { Request, Response, NextFunction } from "express";
import { eventsService } from '../services/events.service'


export async function getAllEvents(_req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await eventsService.getAllEventsFromDB());
    } catch (err) {
        next(err);
    }
}

export async function createEvent(req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await eventsService.createEventInDB(req.body));
    } catch (err) {
        next(err);
    }
}

export async function updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
        const eventId = req.params.eventId;
        res.json(await eventsService.updateEventInDB(eventId, req.body));
    } catch (err) {
        next(err);
    }
}

export async function deleteEvent(req: Request, res: Response, next: NextFunction) {
    try {
        const eventId = req.params.eventId;
        res.json(await eventsService.deleteEventInDB(eventId));
    } catch (err) {
        next(err);
    }
}