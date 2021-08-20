const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

//Serve static content for the app from the 'Public' directory in the app directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require('express-handlebars');

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handglebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

//Use routes
app.use(routes);

app.listen(PORT, () => {
	console.log("Server listening on http://localhost:" + PORT);
});


