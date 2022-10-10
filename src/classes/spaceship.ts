import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ISpaceship } from "../interfaces/interfaces";

@Entity()
export abstract class Spaceship implements ISpaceship {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @Column()
  activityStart: string;
  @Column()
  activityEnd: string;
  @Column()
  active: Boolean;
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

  constructor(spaceship: ISpaceship) {
    (this.name = spaceship.name),
      (this.activityStart = spaceship.activityStart),
      (this.activityEnd = spaceship.activityEnd),
      (this.active = spaceship.active),
      (this.power = spaceship.power),
      (this.pushPower = spaceship.pushPower),
      (this.fuel = spaceship.fuel),
      (this.weight = spaceship.weight),
      (this.description = spaceship.description);
  }

  abstract presentation(): string;
  abstract purpose(): string;
}
