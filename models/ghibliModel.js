import axios from "axios";

// Base URL of the Studio Ghibli API
const API_URL = "https://ghibliapi.vercel.app";

// Get all Studio Ghibli films
export async function getAllFilms() {
    try {
        const response = await axios.get(`${API_URL}/films`);

        return response.data;

    } catch (error) {
        console.error("Error fetching films:", error.message);
        throw new Error("Could not load films from the API");
    }
}

// Get all Studio Ghibli characters
export async function getAllPeople() {
    try {
        const response = await axios.get(`${API_URL}/people`);

        return response.data;

    } catch (error) {
        console.error("Error fetching characters:", error.message);
        throw new Error("Could not load characters from the API");
    }
}

