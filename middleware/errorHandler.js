// middleware/errorHandler.js
function notFound(req, res, next) {
    const error = new Error('Not Found!!!!');
    error.status = 404;
    next(error);
  }
  
function globalErrorHandler(err, req, res, next) {
res.status(err.status || 500);
res.json({
    error: {
        message: err.message,
    },
});
}
  
module.exports = {notFound, globalErrorHandler};
  