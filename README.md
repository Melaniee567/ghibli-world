# Ghibli World

Ghibli World is a web application dedicated to Studio Ghibli films and their magical worlds.

The website allows users to explore Studio Ghibli movies, browse characters, and discover information about the films through data retrieved from the Studio Ghibli API.

The project was developed using Node.js, Express.js, Axios, and EJS, following the Model-View-Controller (MVC) architecture.

## Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – web application framework for handling routes and middleware.
- **Axios** – library used to make HTTP requests to the external API.
- **EJS** – template engine used to render dynamic HTML pages.
- **CSS** – used to style the website and create a responsive layout.
- **dotenv** – used to load environment variables from a `.env` file.

## API

This project uses the [Studio Ghibli API](https://ghibliapi.vercel.app/) to retrieve information about Studio Ghibli films and characters.

The application makes API requests to retrieve film and character data, which is then processed on the server and displayed using EJS templates.

No API key is required.

## Features

- **Home Page** – introduces the website and displays a featured Studio Ghibli film.
- **Films Catalogue** – displays Studio Ghibli films retrieved from the API and supports searching by film name.
- **Film Search** – allows users to search for separate elements by title.
- **Characters Page** – displays Studio Ghibli characters and supports searching by name.
- **Worlds Page** – allows users to explore films and search by title.
- **Responsive Design** – adapts the layout to desktop and mobile screens.
- **Error Handling** – displays custom error pages when a page is not found or a server error occurs.
- **Input Validation** – checks search input on the server before processing it.

## Application Routes

The application includes the following routes:

| Method | Route | Description |
|---|---|---|
| GET | `/` | Displays the home page. |
| GET | `/films` | Displays the films catalogue and supports searching by title using the `search` query parameter. |
| GET | `/people` | Displays Studio Ghibli characters and supports searching by name using the `search` query parameter. |
| GET | `/worlds` | Displays the worlds page and supports searching by film title. |
| GET | `/test-error` | Triggers a test server error to demonstrate centralized error handling. |

### Example Search URLs

- `/films?search=Totoro`
- `/people?search=Sophie`
- `/worlds?search=Spirited%20Away`

Search forms use the GET method, so search terms are included in the URL.

## Project Structure

```text
ghibli-world/
│
├── controllers/
│   └── ghibliController.js
│
├── middleware/
│   ├── errorMiddleware.js
│   └── requestLogger.js
│
├── models/
│   └── ghibliModel.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│
├── routes/
│   └── ghibliRoutes.js
│
├── views/
│   ├── partials/
│   ├── 404.ejs
│   ├── 500.ejs
│   ├── home.ejs
│   ├── films.ejs
│   ├── people.ejs
│   └── worlds.ejs
│
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

### MVC Architecture

The application follows the Model-View-Controller (MVC) pattern:

- **Model** – `ghibliModel.js` handles requests to the Studio Ghibli API using Axios.
- **View** – EJS templates display the data returned by the server.
- **Controller** – `ghibliController.js` processes requests, validates search input, and prepares data for the views.
- **Routes** – `ghibliRoutes.js` defines the application endpoints.
- **Middleware** – handles request logging, 404 errors, and centralized application errors.

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Melaniee567/ghibli-world.git
```

### 2. Navigate to the project directory

```bash
cd ghibli-world
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory of the project.

You can use `.env.example` as a reference:

```env
PORT=3000
```

### 5. Start the application

```bash
npm start
```

### 6. Open the website

Open your browser and visit:

```text
http://localhost:3000
```

The application should now be running locally.

## Error Handling

The application includes error handling to improve reliability and user experience.

- **404 Not Found** – displays a custom page when a requested route does not exist.
- **500 Internal Server Error** – displays a custom page when an unexpected server error occurs.
- **API Error Handling** – handles API connection errors, request timeouts, unsuccessful responses, and invalid API data.
- **Input Validation** – rejects invalid search requests and search terms longer than 100 characters.
- **Request Logging** – logs incoming HTTP requests with timestamps to the server console.

Technical error details are logged in the terminal, while users see friendly error pages and messages.