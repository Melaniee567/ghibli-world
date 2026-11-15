import express from "express";
import dotenv from "dotenv";
import ghibliRoutes from "./routes/ghibliRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { requestLogger } from "./middleware/requestLogger.js";

// Create the Express application
const app = express();

// Load environment variables
dotenv.config();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set the folder for static files
app.use(express.static("public"));

// Parse form data sent from HTML forms
app.use(express.urlencoded({ extended: true }));

// Log incoming requests
app.use(requestLogger);

// Use Ghibli website routes
app.use("/", ghibliRoutes);

// Handle pages that do not exist
app.use(notFound);

// Handle application errors
app.use(errorHandler);

// Set the server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Ghibli World server is running on port ${PORT}`);
});