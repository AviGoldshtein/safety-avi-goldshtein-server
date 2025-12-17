import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import {
  createEventSchema,
  updateEventSchema,
} from "../validation/event.schema";

export const registry = new OpenAPIRegistry();

registry.register("CreateEvent", createEventSchema);
registry.register("UpdateEvent", updateEventSchema);
