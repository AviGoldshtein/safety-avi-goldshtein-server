import swaggerUi from "swagger-ui-express";
import { generateZodSchemas } from "./openapi.document";
import { Express } from "express";

import { eventsPaths } from "./paths/events";
import { eventImagesPaths } from "./paths/eventImages";

export function setupSwagger(app: Express, host: string, port: string) {
  const swaggerSpec = generateZodSchemas();

  swaggerSpec.paths = {
    ...eventsPaths,
    ...eventImagesPaths,
  };

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`Swagger api available on http://${host}:${port}/api/docs`)
}
