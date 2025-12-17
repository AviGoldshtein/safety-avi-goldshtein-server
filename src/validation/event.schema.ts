import { z } from "zod";
import options from "../constants/eventOptions";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const createEventSchema = z.object({
  activityType: z.enum(options.activityTypeArr).openapi({ description: "סוג הפעילות" }),
  unitActivityType: z.enum(options.unitActivityTypeArr).openapi({ description: "סוג יחידה" }),
  category: z.enum(options.categoryArr).openapi({ description: "קטגוריה" }),
  location: z.enum(options.locationArr).openapi({ description: "מיקום" }),
  eventSeverity: z.enum(options.eventSeverityArr).openapi({ description: "חומרת האירוע" }),
  results: z.enum(options.resultsArr).openapi({ description: "תוצאה" }),
  injuriesLevel: z.enum(options.injuriesLevelArr).nullable().openapi({ description: "רמת פגיעה" }),
  typeLocation: z.enum(options.typeLocationArr).nullable().openapi({ description: "סוג מיקום" }),
  weather: z.enum(options.weatherArr).openapi({ description: "מזג אוויר" }),

  currentLocation: z.object({
    lat: z.number().openapi({ description: "קו אורך" }),
    lng: z.number().openapi({ description: "קו רוחב" }),
  }).nullable().openapi({ description: "מיקום נוכחי" }),

  eventDateTime: z.string().openapi({ description: "תאריך ושעת האירוע" }),
  eventTime: z.string().openapi({ description: "שעת האירוע" }),
  eventDescription: z.string().min(15).openapi({ description: "תיאור האירוע" }),
  subUnits: z.string().min(1).openapi({ description: "תתי יחידות" }),
}).openapi({ title: "CreateEvent" });

export const updateEventSchema = createEventSchema.partial().strict().openapi({ title: "UpdateEvent" });

export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;
