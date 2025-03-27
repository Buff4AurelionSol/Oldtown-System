import { pool } from "../config/database";
import { Request, Response } from "express";
import { AuthorType } from "../types/backend-types";

export function getAllAuthors(_req: Request, res: Response) {
  pool.query<AuthorType>('SELECT * FROM authors ORDER BY name', (err, result) => {
    if (err) {
      console.error("No se encontraron autores. ", err)
      res.status(500).send("Error al obtener autores")
      return
    }

    return res.json(result.rows)
  })
}