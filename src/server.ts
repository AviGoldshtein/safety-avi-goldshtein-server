import express, { Request, Response } from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/errorHandler";
import { eventsRouter } from "./routes/events.routes";
import { logger } from "./middlewares/logger";
import cors from "cors";


const app = express();
const port = 3000;  // TODO: move to env variable

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    app.use(express.json());
    app.use(cors());
    
    app.use(logger)

    app.get("/", (req: Request, res: Response) => {
      res.send("Server is running!");
    });

    app.use("/api/events", eventsRouter)

    app.use(errorHandler)

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });