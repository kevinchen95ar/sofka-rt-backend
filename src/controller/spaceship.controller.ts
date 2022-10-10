import { Request, Response } from "express";
import { AppDataSource } from "./../db";
import { FactorySpaceship } from "./../classes/factorySpaceship";

//HAY QUE MODIFICAR PARA QUE USE EL FACTORY EN VEZ DE UNO EN ESPECIFICO
export const createSpaceship = async (req: Request, res: Response) => {
  //Creamos una instancia de unmannedSpacecraft con los datos de la req.body
  const newSpaceship = await AppDataSource.getRepository(
    FactorySpaceship
  ).create(req.body);

  //Guardamos en la base de datos esa instancia
  try {
    const results = await AppDataSource.getRepository(FactorySpaceship).save(
      newSpaceship
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
};
