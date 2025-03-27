import { pool } from "../config/database";
import { Request, Response } from "express";
import { GenreType } from "../types/backend-types";

export function getGenres(_req: Request, res: Response) {
  pool.query<GenreType>("SELECT * FROM genres ORDER BY name", (err, resolve) => {
    if (err) {
      console.error("No se han encontrado generos en la bd ", err)
      return res.status(500).send("Error al encontrar géneros")
    }

    res.json(resolve.rows)

  })
}