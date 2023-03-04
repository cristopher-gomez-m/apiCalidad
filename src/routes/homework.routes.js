import { Router } from "express";
import { gethomeworkByStudentId, getHomeworksByFormedCourseId } from "../controllers/homework.controller.js";
const routerHomework = Router();
routerHomework.get("/tareas/:estudianteId", gethomeworkByStudentId);
routerHomework.get("/tareasDelCurso/:cursoFormadoId", getHomeworksByFormedCourseId);

export default routerHomework;