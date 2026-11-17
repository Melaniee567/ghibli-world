import { getAllFilms, getAllPeople } from "../models/ghibliModel.js";

// Display the Home Page
export async function showHomePage(req, res, next) {
    try {
        const films = await getAllFilms();

        const featuredFilm = films[0];

        res.render("home", { featuredFilm });

    } catch (error) {
        next(error);
    }
}

// Display all Studio Ghibli movies
export async function showFilms(req, res, next) {
    try {
        const rawSearch = req.query.search;
        
        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("films", {
                films: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        const searchQuery = (rawSearch || "").trim();

        if (searchQuery.length > 100) {
            return res.status(400).render("films", {
                films: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        const allFilms = await getAllFilms();

        const films = searchQuery
            ? allFilms.filter(film =>
                film.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allFilms;

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
        const rawSearch = req.query.search;

        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("people", {
                people: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        const searchQuery = (rawSearch || "").trim();

        if (searchQuery.length > 100) {
            return res.status(400).render("people", {
                people: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        const allPeople = await getAllPeople();

        const people = searchQuery
            ? allPeople.filter(person =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allPeople;

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
        const rawSearch = req.query.search;

        if (rawSearch !== undefined && typeof rawSearch !== "string") {
            return res.status(400).render("worlds", {
                films: [],
                searchQuery: "",
                errorMessage: "Invalid search request. Please try again."
            });
        }

        const searchQuery = (rawSearch || "").trim();

        if (searchQuery.length > 100) {
            return res.status(400).render("worlds", {
                films: [],
                searchQuery: "",
                errorMessage: "Your search must be no longer than 100 characters."
            });
        }

        const allFilms = await getAllFilms();

        const films = searchQuery
            ? allFilms.filter(film =>
                film.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allFilms;

        res.render("worlds", {
            films,
            searchQuery,
            errorMessage: ""
        });

    } catch (error) {
        next(error);
    }
}