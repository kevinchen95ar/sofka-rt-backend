import { Request, Response } from "express";
import { UnmannedSpacecraft } from "../classes/unmannedSpacecraft";
// import { AppDataSource } from "../db";
import { AppDataSource } from "./../db";

//HAY QUE MODIFICAR BIEN, DEVOLVER UN JSON PARA MOSTRAR EN FRONT Y VERIFICAR BIEN LOS ATRIBUTOS DE ESTA CLASE
export const createUnmannedSpacecraft = async (req: Request, res: Response) => {
  //Creamos una instancia de unmannedSpacecraft con los datos de la req.body
  const space1 = await AppDataSource.getRepository(UnmannedSpacecraft).create(
    req.body
  );

  //Guardamos en la base de datos esa instancia
  const results = await AppDataSource.getRepository(UnmannedSpacecraft).save(
    space1
  );
  return res.send(results);
};
