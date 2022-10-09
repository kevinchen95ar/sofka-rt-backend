class ShuttleShip extends Spaceship {
  transportCapacity: number;
  height: number;

  constructor(
    name: string,
    activityStart: Date,
    activityEnd: Date,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string,
    transportCapacity: number,
    height: number
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
    this.transportCapacity = transportCapacity;
    this.height = height;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Shuttle Ship`;
  }
  purpose(): string {
    return "My purpose as a Shuttle Ship is to transport cargo from earth to space";
  }
}
