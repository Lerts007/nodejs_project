const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

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

app.post("/check-user", (req, res) => {
  let userName = req.body.userName;
  if (userName === "") return res.redirect("/");
  else return res.redirect("/user/" + userName);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server startd: http://localhost:3000");
});
