// Dependencies
var express = require("express");
var db = require("./models");
// Create an instance of the express app.
var app = express();

var PORT = process.env.PORT || 3000
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
});


