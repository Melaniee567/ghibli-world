// Import functions from the model
import { getAllFilms, getAllPeople } from "../models/ghibliModel.js";

// Display the home page
export async function showHomePage(req, res, next) {
    try {
        const films = await getAllFilms();

        const featuredFilm = films[0];

        res.render("home", { featuredFilm });

    } catch (error) {
        next(error);
    }
}

// Display all Studio Ghibli films
export async function showFilms(req, res, next) {
    try {
        const films = await getAllFilms();

        res.render("films", { films });

    } catch (error) {
        next(error);
    }
}

// Display all Studio Ghibli characters
export async function showPeople(req, res, next) {
    try {
        const people = await getAllPeople();

        res.render("people", { people });

    } catch (error) {
        next(error);
    }
}

// Display the Ghibli Worlds page
export async function showWorlds(req, res, next) {
    try {
        const films = await getAllFilms();

        res.render("worlds", { films });

    } catch (error) {
        next(error);
    }
}