import type { ParameterObject } from "openapi3-ts/oas30";

export const eventIdParam: ParameterObject = {
  name: "eventId",
  in: "path",
  required: true,
  schema: { type: "integer" },
};
