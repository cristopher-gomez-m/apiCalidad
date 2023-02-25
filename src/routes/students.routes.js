import { Router } from "express";
import { getStudent } from "../controllers/student.controller.js";
const router = Router();

router.get("/estudiantes/:id", getStudent);

export default router;
