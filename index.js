require("dotenv").config();
const express = require("express");
const app = express();
const config = require("config");

//require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

app.set("view engine", "pug");
app.set("views", "./views"); // to set default template

const port = process.env.PORT || config.get("PORT");
app.listen(port, () => console.log(`Listening on port ${port}...`));
