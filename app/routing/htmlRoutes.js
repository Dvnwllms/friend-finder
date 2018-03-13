// Sets the dependencies //
var path = require("path");

// Routing requirements //

module.exports = function(app){
  // Default GET route that leads to home.html and displays the home page //
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "../../public/survey.html"));
  });

  // Employs the USE route to the home page //
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "../../public/home.html"));
  });
};