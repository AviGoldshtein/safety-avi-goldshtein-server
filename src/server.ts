import dotenv from "dotenv";
import express, { Request, Response } from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/errorHandler";
import { eventsRouter } from "./routes/events.routes";
import { logger } from "./middlewares/logger";
import cors from "cors";
import { setupSwagger } from "./swagger/swagger.config";


dotenv.config();
const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    app.use("/uploads", express.static("uploads"));
    app.use(express.json());
    app.use(cors());
    
    app.use(logger)

    app.get("/", (_req: Request, res: Response) => {
      res.send("Server is running!");
    });

    app.use("/api/events", eventsRouter)

    app.use(errorHandler)

    setupSwagger(app);

    app.listen(PORT, () => {
      console.log(`Server listening on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });