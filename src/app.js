import express from "express";
import router from "./routes/students.routes.js";
import routerLogin from "./routes/login.routes.js";
const app = express();

//Settings
app.set("port", 4000);

//Middelewares
app.use(express.json());

app.use(router)
app.use(routerLogin)

export default app;
