import express from "express";
import cors from "cors";
const app = express();
import router from "./routes/index.js";

app.use(express.json());
app.use(cors());

app.use(router)

export default app;
