import express from "express";
import router from "./routes/students.routes.js";
const app = express();

//Settings
app.set("port", 4000);

//Middelewares
app.use(express.json());

app.use(router)

export default app;
