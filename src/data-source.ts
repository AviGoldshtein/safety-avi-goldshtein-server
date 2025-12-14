import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./entities/Event";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "mydb",
  synchronize: true,
  logging: false,
  entities: [Event],
  migrations: [],
  subscribers: [],
});