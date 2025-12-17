import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./zod.registry";

export function generateZodSchemas() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  const document = generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Events API",
      version: "1.0.0",
      description: "API for events and event images",
    },
    servers: [{ url: "http://localhost:3000" }],
  });

  return document;
}
