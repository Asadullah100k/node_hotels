//create server Get method

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

// Get method
app.get("/", (req, res) => {
  res.send("welcome");
});

//Import the router file
const personRouter = require ("./Router/personRouter");
const menuItems = require ("./Router/menuRouter");

// use the router
app.use('/person', personRouter);
app.use ('/menu', menuItems);

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});