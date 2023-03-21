const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/user/:userName", (req, res) => {
  let data = {
    userName: req.params.userName,
    hobbies: ["Football", "Skate", "Basketball"],
  };
  res.render("user", data);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server startd: http://localhost:3000");
});
