const connection = require("./model");
const express = require("express");
const application = express();
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses");
const UserController = require("./controllers/users");

application.use(
  bodyparser.urlencoded({
    extended: true
  })
);

application.get("/", (req, res) => {
  //res.send('<h1>Hello World</h1>')
  res.render("index", {});
});

application.use("/course", CourseController);
application.use("/user", UserController);

application.listen("5000", () => {
  console.log("Server started");
});
