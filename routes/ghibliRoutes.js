// Import Express
import express from "express";

// Import controller functions
import {
    showHomePage,
    showFilms,
    showPeople,
    showWorlds
} from "../controllers/ghibliController.js";

// Create a router
const router = express.Router();

// Home page
router.get("/", showHomePage);

// Films page
router.get("/films", showFilms);

// Characters page
router.get("/people", showPeople);

// Worlds page
router.get("/worlds", showWorlds);

// Temporary route for testing the 500 error page
router.get("/test-error", (req, res, next) => {
    next(new Error("This is a test server error."));
});

// Export the router
export default router;