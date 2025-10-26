import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes/index";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

export default app;
