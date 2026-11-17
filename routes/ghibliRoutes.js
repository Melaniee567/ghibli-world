import express from "express";

import {
    showHomePage,
    showFilms,
    showPeople,
    showWorlds
} from "../controllers/ghibliController.js";

const router = express.Router();

router.get("/", showHomePage);

router.get("/films", showFilms);

router.get("/people", showPeople);

router.get("/worlds", showWorlds);

router.get("/test-error", (req, res, next) => {
    next(new Error("This is a test server error."));
});

export default router;