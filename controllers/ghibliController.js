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

// Local images for selected Studio Ghibli characters
const characterImages = {
    "Haku": "/images/characters/haku.png",
    "Pazu": "/images/characters/pazu.png",
    "Lusheeta Toel Ul Laputa": "/images/characters/sheeta.png",
    "Captain Dola": "/images/characters/captain-dola.png",
    "Romska Palo Ul Laputa": "/images/characters/romska-palo-ul-laputa.png",
    "Uncle Pom": "/images/characters/uncle-pom.png",
    "General Mouro": "/images/characters/general-mouro.png",
    "Duffi": "/images/characters/duffi.png",
    "Louis": "/images/characters/louis.png",
    "Charles": "/images/characters/charles.png",
    "Henri": "/images/characters/henri.png",
    "Motro": "/images/characters/motro.png",
    "Okami": "/images/characters/okami.png",
    "Ashitaka": "/images/characters/ashitaka.png",
    "San": "/images/characters/san.png",
    "Eboshi": "/images/characters/eboshi.png",
    "Jigo": "/images/characters/jigo.png",
    "Kohroku": "/images/characters/kohroku.png",
    "Gonza": "/images/characters/gonza.png",
    "Hii-sama": "/images/characters/hii-sama.png",
    "Yakul": "/images/characters/yakul.png",
    "Shishigami": "/images/characters/shishigami.png",
    "Moro": "/images/characters/moro.png",
    "Jiji": "/images/characters/jiji.png",
    "Satsuki Kusakabe": "/images/characters/satsuki-kusakabe.png",
    "Mei Kusakabe": "/images/characters/mei-kusakabe.png",
    "Tatsuo Kusakabe": "/images/characters/tatsuo-kusakabe.png",
    "Yasuko Kusakabe": "/images/characters/yasuko-kusakabe.png",
    "Granny": "/images/characters/granny.png",
    "Kanta Ōgaki": "/images/characters/kanta-ogaki.png",
    "Totoro": "/images/characters/totoro.png",
    "Chu Totoro": "/images/characters/chu-totoro.png",
    "Chibi Totoro": "/images/characters/chibi-totoro.png",
    "Catbus": "/images/characters/catbus.png",
    "Niya": "/images/characters/niya.png",
    "Renaldo Moon aka Moon aka Muta": "/images/characters/muta.png",
    "Cat King": "/images/characters/cat-king.png",
    "Yuki": "/images/characters/yuki.png",
    "Haru": "/images/characters/haru.png",
    "Baron Humbert von Gikkingen": "/images/characters/baron-humbert-von-gikkingen.png",
    "Natori": "/images/characters/natori.png",
    "Colonel Muska": "/images/characters/colonel-muska.png",
    "Porco Rosso": "/images/characters/porco-rosso.png",
    "Sosuke": "/images/characters/sosuke.png",
    "Kiki": "/images/characters/kiki.png",
    "Laputian Robot": "/images/characters/laputian-robot.png",
    "Chihiro Ogino": "/images/characters/chihiro-ogino.png",
    "Osono": "/images/characters/osono.png",
    "Ursula": "/images/characters/ursula.png",
    "Tombo": "/images/characters/tombo.png",
    "Madame": "/images/characters/madame.png",
    "Earwig": "/images/characters/earwig.png",
    "Bella Yaga": "/images/characters/bella-yaga.png",
    "Mandrake": "/images/characters/mandrake.png",
    "Scarlet Rose": "/images/characters/scarlet-rose.png",
    "Thomas": "/images/characters/thomas.png",
    "Custard": "/images/characters/custard.png"
};


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

        const filteredPeople = searchQuery
            ? allPeople.filter(person =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : allPeople;

        const people = filteredPeople.map(person => ({
            ...person,
            image: characterImages[person.name] || null
        }));

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