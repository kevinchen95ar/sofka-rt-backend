class mannedSpaceflight extends Spaceship {
  distanceFromEarth: number;
  tripulationCapacity: BigInt;

  constructor(
    name: string,
    activityStart: Date,
    activityEnd: Date,
    power: number,
    pushPower: number,
    fuel: string,
    weight: number,
    description: string,
    distanceFromEarth: number,
    tripulationCapacity: BigInt
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
    this.distanceFromEarth = distanceFromEarth;
    this.tripulationCapacity = tripulationCapacity;
  }

  presentation(): string {
    return `My name is ${this.name} and im a Manned Spaceflight`;
  }
  purpose(): string {
    return "My purpose as a Manned Spaceflight is to transport humans to space.";
  }
}
