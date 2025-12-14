import express from "express";
import { imagesRouter } from "./images.routes";
import { validate } from "../middlewares/validate";
import { createEventSchema, updateEventSchema } from "../validation/event.schema";
import { 
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
 } from "../controllers/events.controller";


export const eventsRouter = express.Router();

eventsRouter.route("/")
    .get(getAllEvents)
    .post(validate(createEventSchema), createEvent)

eventsRouter.route("/:eventId")
    .put(validate(updateEventSchema), updateEvent)
    .delete(deleteEvent)

eventsRouter.use("/:eventId/images", imagesRouter);