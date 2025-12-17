import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.options";
import { Express } from "express";

export function setupSwagger(app: Express) {
  const swaggerSpec = swaggerJsdoc(swaggerOptions);

  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
}
