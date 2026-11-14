// Find the search input
const searchInput = document.getElementById("filmSearch");

// Find all film cards
const filmCards = document.querySelectorAll(".film-card");

// Find the no results message
const noResults = document.getElementById("noResults");

// Listen for text entered by the user
searchInput.addEventListener("input", function () {

    // Get the search text and convert it to lowercase
    const searchText = searchInput.value.toLowerCase().trim();

    // Count how many films match the search
    let visibleFilms = 0;

    // Check every film card
    filmCards.forEach(function (card) {

        // Get the film title
        const filmTitle = card.querySelector("h3").textContent.toLowerCase();

        // Check if the title contains the search text
        if (filmTitle.includes(searchText)) {
            card.style.display = "block";
            visibleFilms++;
        } else {
            card.style.display = "none";
        }

    });

    // Show a message if no films were found
    if (visibleFilms === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});