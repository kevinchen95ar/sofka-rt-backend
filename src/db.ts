import { DataSource } from "typeorm";
import { db } from "./config";
import { Spaceship } from "./classes/spaceship";
import { UnmannedSpacecraft } from "./classes/unmannedSpacecraft";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: db.host,
  username: db.username,
  password: db.password,
  database: db.database,
  synchronize: true,
  logging: true,
  entities: [Spaceship, UnmannedSpacecraft],
  subscribers: [],
  migrations: [],
});
