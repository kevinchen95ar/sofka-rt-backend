interface ISpaceship {
  name: string;
  activityStart: Date;
  activityEnd: Date;
  power: number;
  pushPower: number;
  fuel: string;
  weight: number;
  description: string;
}

interface IShuttleship extends ISpaceship {
  transportCapacity: number;
  height: number;
}

interface IUnmannedSpacecraft extends ISpaceship {
  destiny: string;
  timeForDestiny: number;
  speed: number;
  studySubject: string;
}

interface IMannedSpaceflight extends ISpaceship {
  distanceFromEarth: number;
  tripulationCapacity: BigInt;
}
