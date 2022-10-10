import { Spaceship } from "./spaceship";
import { Column, Entity } from "typeorm";
import { IMannedSpaceflight } from "./../interfaces/interfaces";

@Entity()
export class MannedSpaceflight extends Spaceship {
  @Column()
  distanceFromEarth?: number;
  @Column()
  tripulationCapacity?: number;

  constructor(
    name: string,
    activityStart: string,
    activityEnd: string,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string,
    mannedSpaceflight?: IMannedSpaceflight
  ) {
    super(
      name,
      activityStart,
      activityEnd,
      power,
      pushPower,
      fuel,
      weight,
      description
    );
    this.distanceFromEarth = mannedSpaceflight?.distanceFromEarth;
    this.tripulationCapacity = mannedSpaceflight?.tripulationCapacity;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Manned Spaceflight`;
  }
  purpose(): string {
    return "My purpose as a Manned Spaceflight is to transport humans to space.";
  }
}
