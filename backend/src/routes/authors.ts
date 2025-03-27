import { Router } from "express";
import { getAllAuthors } from "../controllers/authorsControllers";
import { getGenres } from "../controllers/genresControllers";


export const router = Router()

router.get("/authors", getAllAuthors)
router.get("/genres", getGenres)
