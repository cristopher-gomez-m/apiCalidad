import { Router } from "express";
import { getBooks } from "../controllers/student.controller.js";
const router = Router();

router.get("/estudiantes/:id", getBooks);

export default router;
