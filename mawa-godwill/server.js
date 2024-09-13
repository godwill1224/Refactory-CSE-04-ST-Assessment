// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const moment = require("moment")

require("dotenv").config();

// importing routes
const flightRoutes = require("./routes/flightRoutes");

// instantiations
const app = express();
const port = 4000;

// configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

// set view engine to pug
app.locals.moment = moment
app.set("view engine", "pug"); // specify the view engine
app.set("views", path.join(__dirname, "views")); // specify the view directory

// middleware
app.use(express.static(path.join(__dirname, "public"))); // specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json()); // helps to capture data in json

// use imported routes
app.use("/", flightRoutes);


app.get("*", (req, res) => {
  res.send("Error! This page does not exist");
});

//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`));
