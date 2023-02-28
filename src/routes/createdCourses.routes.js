import { Router } from "express";
import { getCourseGradingByStudentId, getCourses, getCoursesByStudentId } from "../controllers/courses.controller.js";
const routerCreatedCourses = Router();

routerCreatedCourses.get("/cursos/:curso", getCourses);
routerCreatedCourses.get("/cursosPorEstudiante/:estudiante_id", getCoursesByStudentId);
routerCreatedCourses.get("/notas_del_curso/:estudiante_id", getCourseGradingByStudentId);
export default routerCreatedCourses;