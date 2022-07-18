const express = require("express");
const server = express();

server.set("view engine", "ejs");
server.use(logger);
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.render("index");
});

// OR call the same function with logger
server.get("/", logger, (req, res) => {
  res.render("index");
});

// OR call the same function with three different logger
server.get("/", logger, logger, logger, (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

server.use("/users", userRouter);
server.use("/posts", postRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

server.listen(3000);
