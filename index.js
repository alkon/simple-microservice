// Import the Express module
const express = require('express');
const { notFound, globalErrorHandler } = require('./middleware/errorHandler');
const pingRoute = require('./routes/ping');

// Create an instance of an Express app
const app = express();

// Define the port on which the service will run
const port = process.env.PORT || 3000;

app.use(pingRoute);

app.use(notFound);
app.use(globalErrorHandler);

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Microservice running on port ${port}`);
});
