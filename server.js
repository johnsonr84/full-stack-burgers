const express = require("express");
const exphbs = require("express-handlebars");

const connection = require("./config/connection");
const routes = require("./controllers/burgers_controller");

const app = express();

const PORT = process.env.PORT || 3000;

//Serve static content for the app from the 'Public' directory in the app directory
app.use(express.static("public"));



// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handglebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Use routes
app.use(routes);

app.listen(PORT, () => {
	console.log("Server listening on http://localhost:" + PORT);
});


