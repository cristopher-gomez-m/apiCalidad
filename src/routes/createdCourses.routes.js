import { Router } from "express";
import { getAllCourses, getCourseGradingByStudentId, getCourses, getCoursesByStudentId, getCoursesByTeacherId, registerInTheCourse, setAsistenciaByHorarioId, setPromedioByHorarioId } from "../controllers/courses.controller.js";
const routerCreatedCourses = Router();

routerCreatedCourses.get("/cursos/:curso", getCourses);
routerCreatedCourses.get("/cursosPorEstudiante/:estudiante_id", getCoursesByStudentId);
routerCreatedCourses.get("/notas_del_curso/:estudiante_id", getCourseGradingByStudentId);
routerCreatedCourses.get("/cursosPorDocente/:docente_id", getCoursesByTeacherId);
routerCreatedCourses.post("/curso/editarPromedio",setPromedioByHorarioId);
routerCreatedCourses.post("/curso/editarAsistencia",setAsistenciaByHorarioId);
routerCreatedCourses.get("/curso/AllCursos", getAllCourses);
routerCreatedCourses.post("/matricularse", registerInTheCourse);
export default routerCreatedCourses;


