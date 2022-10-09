import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/routes";

// create and setup of express app
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(routes);

export default app;
