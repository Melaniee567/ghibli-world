import axios from "axios";

// Base URL of the Studio Ghibli API
const API_URL = "https://ghibliapi.vercel.app";

// Get all Studio Ghibli films
export async function getAllFilms() {
    try {
        const response = await axios.get(`${API_URL}/films`, {
            timeout: 10000
        });

        if (!Array.isArray(response.data)) {
            throw new Error("Invalid film data received from the API.");
        }

        return response.data;
    }
    catch (error) {
        // Log technical error details in the terminal
        console.error("Error fetching films:", error.message);

        if (error.code === "ECONNABORTED") {
            throw new Error("The Ghibli API request timed out.");
        }

        if (error.response) {
            console.error("API status:", error.response.status);

            throw new Error(
                `The Ghibli API returned an error: ${error.response.status}`
            );
        }

        if (error.request) {
            throw new Error("Could not connect to the Ghibli API.");
        }

        throw new Error("An unexpected error occurred while loading films.");
    }

}

// Get all Studio Ghibli characters
export async function getAllPeople() {
    try {
        const response = await axios.get(`${API_URL}/people`, {
            timeout: 10000
        });

        if (!Array.isArray(response.data)) {
            throw new Error("Invalid character data received from the API.");
        }

        return response.data;

    }
    catch (error) {
        // Log technical error details in the terminal
        console.error("Error fetching characters:", error.message);

        if (error.code === "ECONNABORTED") {
            throw new Error("The Ghibli API request timed out.");
        }

        if (error.response) {
            console.error("API status:", error.response.status);

            throw new Error(
                `The Ghibli API returned an error: ${error.response.status}`
            );
        }

        if (error.request) {
            throw new Error("Could not connect to the Ghibli API.");
        }

        throw new Error("An unexpected error occurred while loading characters.");
    }

}

