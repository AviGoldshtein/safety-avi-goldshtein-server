import type { PathItemObject } from "openapi3-ts/oas30";
import { eventIdParam } from "./params";

export const eventsPaths: Record<string, PathItemObject> = {
  "/api/events": {
    get: {
      summary: "Get all events",
      tags: ["Events"],
      responses: {
        "200": { description: "List of events" },
      },
    },
    post: {
      summary: "Create a new event",
      tags: ["Events"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CreateEvent" },
          },
        },
      },
      responses: {
        "201": { description: "Event created" },
      },
    },
  },

  "/api/events/{eventId}": {
    put: {
      summary: "Update an event",
      tags: ["Events"],
      parameters: [eventIdParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UpdateEvent" },
          },
        },
      },
      responses: {
        "200": { description: "Event updated" },
      },
    },
    delete: {
      summary: "Delete an event",
      tags: ["Events"],
      parameters: [eventIdParam],
      responses: {
        "200": { description: "Event deleted" },
      },
    },
  },
};
