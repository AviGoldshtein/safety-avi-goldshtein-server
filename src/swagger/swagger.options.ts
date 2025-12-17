import { Options } from "swagger-jsdoc";

export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Events API",
      version: "1.0.0",
      description: "API for events and event images",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [
    "src/swagger/*.ts"
  ],
};
