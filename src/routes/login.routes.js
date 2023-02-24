import { Router } from "express";
import { getCrendentials } from "../controllers/login.controller.js";
const routerLogin = Router();

router.get("/login", getCrendentials);

export default routerLogin;
