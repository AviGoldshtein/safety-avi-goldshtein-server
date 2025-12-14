import { z } from "zod";
import options from "../constants/eventOptions";

export const createEventSchema = z.object({
  activityType: z.enum(options.activityTypeArr),
  unitActivityType: z.enum(options.unitActivityTypeArr),
  category: z.enum(options.categoryArr),
  location: z.enum(options.locationArr),
  eventSeverity: z.enum(options.eventSeverityArr),
  results: z.enum(options.resultsArr),
  injuriesLevel: z.enum(options.injuriesLevelArr).nullable(),
  typeLocation: z.enum(options.typeLocationArr).nullable(),
  weather: z.enum(options.weatherArr),

  currentLocation: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .nullable(),

  eventDateTime: z.string(),
  eventTime: z.string(),
  eventDescription: z.string().min(15),
  subUnits: z.string().min(1),
});

export const updateEventSchema = createEventSchema.partial().strict();


export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;