import { IFactorySpaceship } from "./../interfaces/interfaces";
import { UnmannedSpacecraft } from "./unmannedSpacecraft";
import { MannedSpaceflight } from "./mannedSpaceflight";
import { ShuttleShip } from "./shuttleShip";
export class FactorySpaceship {
  static createSpaceship(factorySpaceship: IFactorySpaceship) {
    if (factorySpaceship.type === "Unmanned Spacecraft") {
      return new UnmannedSpacecraft(
        factorySpaceship.spaceship.name,
        factorySpaceship.spaceship.activityStart,
        factorySpaceship.spaceship.activityEnd,
        factorySpaceship.spaceship.power,
        factorySpaceship.spaceship.pushPower,
        factorySpaceship.spaceship.fuel,
        factorySpaceship.spaceship.weight,
        factorySpaceship.spaceship.description,
        factorySpaceship.unmannedSpacecraft
      );
    } else if (factorySpaceship.type === "Manned Spaceflight") {
      return new MannedSpaceflight(
        factorySpaceship.spaceship.name,
        factorySpaceship.spaceship.activityStart,
        factorySpaceship.spaceship.activityEnd,
        factorySpaceship.spaceship.power,
        factorySpaceship.spaceship.pushPower,
        factorySpaceship.spaceship.fuel,
        factorySpaceship.spaceship.weight,
        factorySpaceship.spaceship.description,
        factorySpaceship.mannedSpaceflight
      );
    } else {
      return new ShuttleShip(
        factorySpaceship.spaceship.name,
        factorySpaceship.spaceship.activityStart,
        factorySpaceship.spaceship.activityEnd,
        factorySpaceship.spaceship.power,
        factorySpaceship.spaceship.pushPower,
        factorySpaceship.spaceship.fuel,
        factorySpaceship.spaceship.weight,
        factorySpaceship.spaceship.description,
        factorySpaceship.shuttleShip
      );
    }
  }
}
