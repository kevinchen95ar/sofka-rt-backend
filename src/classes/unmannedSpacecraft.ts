import { Spaceship } from "./spaceship";
import { Column, Entity } from "typeorm";

@Entity()
export class UnmannedSpacecraft extends Spaceship {
  @Column()
  destiny: string;
  @Column()
  timeForDestiny: number;
  @Column()
  speed: number;
  @Column()
  studySubject: string;

  constructor(
    name: string,
    activityStart: Date,
    activityEnd: Date,
    active: Boolean,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string,
    destiny: string,
    timeForDestiny: number,
    speed: number,
    studySubject: string
  ) {
    super(
      name,
      activityStart,
      activityEnd,
      active,
      power,
      pushPower,
      fuel,
      weight,
      description
    );
    this.destiny = destiny;
    this.timeForDestiny = timeForDestiny;
    this.speed = speed;
    this.studySubject = studySubject;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Unmanned Spacecraft`;
  }
  purpose(): string {
    return "My purpose as a Unmanned Spacecraft is to study things.";
  }
}
