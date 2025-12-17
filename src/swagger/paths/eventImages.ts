import type { PathItemObject } from "openapi3-ts/oas30";
import { eventIdParam } from "./params";

export const eventImagesPaths: Record<string, PathItemObject> = {
  "/api/events/{eventId}/images": {
    get: {
      summary: "Get images for an event",
      tags: ["Event Images"],
      parameters: [eventIdParam],
      responses: {
        "200": { description: "List of images" },
      },
    },
    post: {
      summary: "Upload images for an event",
      tags: ["Event Images"],
      parameters: [eventIdParam],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                files: {
                  type: "array",
                  items: { type: "string", format: "binary" },
                },
              },
            },
          },
        },
      },
      responses: {
        "201": { description: "Images uploaded" },
      },
    },
    delete: {
      summary: "Delete images of an event",
      tags: ["Event Images"],
      parameters: [eventIdParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                imageIds: {
                  type: "array",
                  items: { type: "string" },
                },
              },
            },
          },
        },
      },
      responses: {
        "200": { description: "Images deleted" },
      },
    },
  },
};
