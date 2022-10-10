import { DataSource } from "typeorm";
import { db } from "./config";
import { Spaceship } from "./classes/spaceship";
import { UnmannedSpacecraft } from "./classes/unmannedSpacecraft";
import { MannedSpaceflight } from "./classes/mannedSpaceflight";
import { ShuttleShip } from "./classes/shuttleShip";
import { FactorySpaceship } from "./classes/factorySpaceship";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: db.host,
  username: db.username,
  password: db.password,
  database: db.database,
  synchronize: true,
  logging: true,
  entities: [
    Spaceship,
    UnmannedSpacecraft,
    MannedSpaceflight,
    ShuttleShip,
    FactorySpaceship,
  ],
  subscribers: [],
  migrations: [],
});
