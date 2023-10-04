const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Configure template Engine and Main Template File
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: { todaysDate: () => new Date() },
  })
);

app.set("view engine", "hbs");

// Routers
app.get("/", (req, res) => {
  res.render("home", { msg: "This is home page" });
});

app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/people", (req, res) => {
  res.render("people", { peoples: [{ name: "long" }, { name: "long" }] });
});

// Port where app is served
app.listen(8000, () => {
  console.log("Server is listening at port 8000");
});
