import { Router } from "express";
import { getCourses } from "../controllers/courses.controller.js";
const routerCreatedCourses = Router();

routerCreatedCourses.get("/cursos/:curso", getCourses);

export default routerCreatedCourses;