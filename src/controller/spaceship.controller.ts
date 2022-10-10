import { Request, Response } from "express";
import { AppDataSource } from "./../db";
import { FactorySpaceship } from "./../classes/factorySpaceship";
import { IAllShips } from "../interfaces/interfaces";

//Creacion de una nave atraves de una factory pattern
export const createSpaceship = async (req: Request, res: Response) => {
  //Creamos una instancia de la nave con los datos de la req.body
  const newSpaceship = FactorySpaceship.createSpaceship(req.body);

  //Guardamos en la base de datos esa instancia
  try {
    await AppDataSource.getRepository(newSpaceship.constructor.name).save(
      newSpaceship
    );
    res.send("Creación exitosa");
  } catch (error) {
    res.send(error);
  }
};

export const getAllSpaceships = async (_req: Request, res: Response) => {
  var allShips: IAllShips[] = [];

  const allShipsTypes = [
    "UnmannedSpacecraft",
    "MannedSpaceflight",
    "ShuttleShip",
  ];

  try {
    for (const shipType of allShipsTypes) {
      //Hacer un repositorio por cada tipo de nave
      let shipRepository = AppDataSource.getRepository(shipType);
      //traer las naves de cada tipo
      let ships = await shipRepository.find();
      //A cada nave la insertamos en allShips
      ships.forEach((ship) =>
        allShips.push({
          type: shipType,
          id: ship.id,
          name: ship.name,
          activityStart: ship.activityStart,
          activityEnd: ship.activityEnd,
          power: ship.power,
          pushPower: ship.pushPower,
          fuel: ship.fuel,
          weight: ship.weight,
          description: ship.description,
          transportCapacity: ship.transportCapacity,
          height: ship.height,
          destiny: ship.destiny,
          timeForDestiny: ship.timeForDestiny,
          speed: ship.speed,
          studySubject: ship.studySubject,
          distanceFromEarth: ship.distanceFromEarth,
          tripulationCapacity: ship.tripulationCapacity,
        })
      );
    }
    res.send(allShips);
  } catch (error) {
    res.send(error);
  }
};
