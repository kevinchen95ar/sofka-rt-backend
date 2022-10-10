export interface ISpaceship {
  name: string;
  activityStart: string;
  activityEnd: string;
  active: Boolean;
  power: number;
  pushPower: number;
  fuel: string;
  weight: number;
  description: string;
}

export interface IShuttleship {
  transportCapacity?: number;
  height?: number;
}

export interface IUnmannedSpacecraft {
  destiny?: string;
  timeForDestiny?: number;
  speed?: number;
  studySubject?: string;
}

export interface IMannedSpaceflight {
  distanceFromEarth?: number;
  tripulationCapacity?: number;
}

export interface IFactorySpaceship {
  type: string;
  spaceship: ISpaceship;
  shuttleShip?: IShuttleship;
  unmannedSpacecraft?: IUnmannedSpacecraft;
  mannedSpaceflight?: IMannedSpaceflight;
}
