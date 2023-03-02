import { Router } from "express";
import { getCourseGradingByStudentId, getCourses, getCoursesByStudentId, getCoursesByTeacherId } from "../controllers/courses.controller.js";
const routerCreatedCourses = Router();

routerCreatedCourses.get("/cursos/:curso", getCourses);
routerCreatedCourses.get("/cursosPorEstudiante/:estudiante_id", getCoursesByStudentId);
routerCreatedCourses.get("/notas_del_curso/:estudiante_id", getCourseGradingByStudentId);
routerCreatedCourses.get("/cursosPorDocente/:docente_id", getCoursesByTeacherId);
export default routerCreatedCourses;


