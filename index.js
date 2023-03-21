const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this home page");
});

app.get("/about", (req, res) => {
  res.send("this about page");
});

app.get("/user/:userName/:userId", (req, res) => {
  res.send(`User ID: ${req.params.userId}. User name: ${req.params.userName}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server startd: http://localhost:3000");
});
