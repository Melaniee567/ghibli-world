// Log every incoming request
export function requestLogger(req, res, next) {

    // Get the current date and time
    const timestamp = new Date().toISOString();

    // Display the request method, URL and time
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);

    // Continue to the next middleware or route
    next();
}