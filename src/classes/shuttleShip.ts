import { Column, Entity } from "typeorm";
import { Spaceship } from "./spaceship";
import { IShuttleship, ISpaceship } from "./../interfaces/interfaces";

@Entity()
export class ShuttleShip extends Spaceship {
  @Column()
  transportCapacity?: number;
  @Column()
  height?: number;

  constructor(spaceship: ISpaceship, shuttleShip?: IShuttleship) {
    super(spaceship);
    this.height = shuttleShip?.height;
    this.transportCapacity = shuttleShip?.transportCapacity;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Shuttle Ship`;
  }
  purpose(): string {
    return "My purpose as a Shuttle Ship is to transport cargo from earth to space";
  }
}
