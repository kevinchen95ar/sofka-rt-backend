import { Spaceship } from "./spaceship";
import { Column, Entity } from "typeorm";
import { ISpaceship, IUnmannedSpacecraft } from "./../interfaces/interfaces";

@Entity()
export class UnmannedSpacecraft extends Spaceship {
  @Column()
  destiny?: string;
  @Column()
  timeForDestiny?: number;
  @Column()
  speed?: number;
  @Column()
  studySubject?: string;

  constructor(spaceship: ISpaceship, unmannedSpacecraft?: IUnmannedSpacecraft) {
    super(spaceship);
    this.destiny = unmannedSpacecraft?.destiny;
    this.timeForDestiny = unmannedSpacecraft?.timeForDestiny;
    this.speed = unmannedSpacecraft?.speed;
    this.studySubject = unmannedSpacecraft?.studySubject;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Unmanned Spacecraft`;
  }
  purpose(): string {
    return "My purpose as a Unmanned Spacecraft is to study things.";
  }
}
