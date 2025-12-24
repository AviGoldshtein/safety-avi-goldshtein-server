import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./entities/Event";
import { Image } from "./entities/Image";

export const AppDataSource = new DataSource({
  type: "postgres", 
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "mydb",
  synchronize: false,
  logging: false,
  entities: [Event, Image],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});