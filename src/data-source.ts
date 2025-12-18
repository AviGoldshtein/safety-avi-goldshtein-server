import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./entities/Event";
import { Image } from "./entities/Image";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "mydb",
  synchronize: false,
  logging: false,
  entities: [Event, Image],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});