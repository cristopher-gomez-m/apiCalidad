import { Router } from "express";
import { getBooks } from "../controllers/student.controller.js";
const router = Router();

router.get("/index", getBooks);

export default router;
