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
        // Get the raw search query from the URL
        const rawSearch = req.query.search;

        // Validate the search query before calling the API
        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("films", {
                films: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        // Remove unnecessary spaces
        const searchQuery = (rawSearch || "").trim();

        // Check that the search query is not too long
        if (searchQuery.length > 100) {
            return res.status(400).render("films", {
                films: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        // Get all films from the API
        const allFilms = await getAllFilms();

        // Filter films by title
        const films = searchQuery
            ? allFilms.filter(film =>
                film.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allFilms;

        // Render the films page
        res.render("films", {
            films,
            searchQuery,
            errorMessage: ""
        });

    } catch (error) {
        next(error);
    }
}

// Display all Studio Ghibli characters
export async function showPeople(req, res, next) {
    try {
        // Get the raw search query from the URL
        const rawSearch = req.query.search;

        // Validate the search query
        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("people", {
                people: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        // Remove unnecessary spaces
        const searchQuery = (rawSearch || "").trim();

        // Check the search query length
        if (searchQuery.length > 100) {
            return res.status(400).render("people", {
                people: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        // Get all characters from the API
        const allPeople = await getAllPeople();

        // Filter characters by name
        const people = searchQuery
            ? allPeople.filter(person =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allPeople;

        // Render the people page
        res.render("people", {
            people,
            searchQuery,
            errorMessage: ""
        });

    } catch (error) {
        next(error);
    }
}

// Display the Ghibli Worlds page
export async function showWorlds(req, res, next) {
    try {
        // Get the raw search query from the URL
        const rawSearch = req.query.search;

        // Validate the search query
        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("worlds", {
                films: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        // Remove unnecessary spaces
        const searchQuery = (rawSearch || "").trim();

        // Check the search query length
        if (searchQuery.length > 100) {
            return res.status(400).render("worlds", {
                films: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        // Get all films from the API
        const allFilms = await getAllFilms();

        // Filter films by title
        const films = searchQuery
            ? allFilms.filter(film =>
                film.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allFilms;

        // Render the worlds page
        res.render("worlds", {
            films,
            searchQuery,
            errorMessage: ""
        });

    } catch (error) {
        next(error);
    }
}