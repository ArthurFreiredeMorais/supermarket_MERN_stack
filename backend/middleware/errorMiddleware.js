// function for creating status 404 in case the search is wrong in HTTP - notfound
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// 
const errorHandler = (err, req, res, next) => {
  // if the error has the 200 status it will be settled for 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Send a JSON response with the determined status code, error message, and error stack (if in development mode).
  res.status(statusCode).json({
    message: message,
    // Include the error stack in the response if the application is not in production mode.
    stack: process.env.NODE_ENV === 'production' ? '...' : err.stack,
  });
};

export { notFound, errorHandler };