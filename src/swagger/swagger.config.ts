import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.options";
import { generateZodSchemas } from "./openapi.document";
import { Express } from "express";

export function setupSwagger(app: Express) {
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  const zodSchemas = generateZodSchemas();

  swaggerSpec.components = swaggerSpec.components || {};
  swaggerSpec.components.schemas = {
    ...swaggerSpec.components.schemas,
    ...zodSchemas.components?.schemas,
  };
    
  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
}
