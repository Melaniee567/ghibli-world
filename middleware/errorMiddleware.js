// Handle requests to pages that do not exist
export function notFound(req, res, next) {
    const error = new Error(`Page not found: ${req.originalUrl}`);

    res.status(404);

    next(error);
}

// Handle application errors
export function errorHandler(error, req, res, next) {
    const statusCode = res.statusCode === 200
        ? 500
        : res.statusCode;

    console.error("Application error:", {
        message: error.message,
        statusCode: statusCode,
        url: req.originalUrl,
        method: req.method
    });

    // Display a custom 404 page
    if (statusCode === 404) {
        return res.status(404).render("404");
    }

    // Display a general error page
    return res.status(statusCode).render("500");
}