var express = require("express");

var connection = require("./db/connection");

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 8080;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// TODO: Mount your HTML and API routes
app.use(apiRoutes);
app.use(htmlRoutes);

// Start the server on the port
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
