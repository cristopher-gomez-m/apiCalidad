import express from "express";

const app = express();

//Settings
app.set("port", 4000);

//Middelewares
app.use(express.json());

export default app;
