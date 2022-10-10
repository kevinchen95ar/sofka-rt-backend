import { Column, PrimaryGeneratedColumn } from "typeorm";
import { ISpaceship } from "../interfaces/interfaces";

export abstract class Spaceship implements ISpaceship {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  activityStart: string;
  @Column()
  activityEnd: string;
  @Column()
  power: number;
  @Column()
  pushPower: number;
  @Column()
  fuel: string;
  @Column()
  weight: number;
  @Column()
  description: string;

  constructor(
    name: string,
    activityStart: string,
    activityEnd: string,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string
  ) {
    (this.name = name),
      (this.activityStart = activityStart),
      (this.activityEnd = activityEnd),
      (this.power = power),
      (this.pushPower = pushPower),
      (this.fuel = fuel),
      (this.weight = weight),
      (this.description = description);
  }

  abstract presentation(): string;
  abstract purpose(): string;
}
