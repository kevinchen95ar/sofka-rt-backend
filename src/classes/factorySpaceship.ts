import { ISpaceship, IFactorySpaceship } from "./../interfaces/interfaces";
import { UnmannedSpacecraft } from "./unmannedSpacecraft";
import { MannedSpaceflight } from "./mannedSpaceflight";
import { ShuttleShip } from "./shuttleShip";
export class FactorySpaceship {
  static createSpaceship(factorySpaceship: IFactorySpaceship): ISpaceship {
    if (factorySpaceship.type === "Unmanned Spacecraft") {
      return new UnmannedSpacecraft(
        factorySpaceship.spaceship,
        factorySpaceship.unmannedSpacecraft
      );
    } else if (factorySpaceship.type === "Manned Spaceflight") {
      return new MannedSpaceflight(
        factorySpaceship.spaceship,
        factorySpaceship.mannedSpaceflight
      );
    } else {
      return new ShuttleShip(
        factorySpaceship.spaceship,
        factorySpaceship.shuttleShip
      );
    }
  }
}
