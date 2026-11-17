import express from "express";
import dotenv from "dotenv";
import ghibliRoutes from "./routes/ghibliRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { requestLogger } from "./middleware/requestLogger.js";

const app = express();

dotenv.config();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use("/", ghibliRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ghibli World server is running on port ${PORT}`);
});