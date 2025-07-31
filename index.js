const express = require("express");
const mongoose = require("mongoose");
const userController = require("./routeControllers/userController");
const todoController = require("./routeControllers/todoController");

const PORT = process.env.PORT || 4000;

// app initialization
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
mongoose
  .connect("mongodb://localhost/users")
  .then(() => {
    console.log("Connection succeeded");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.use("/api/users", userController);
app.use("/api/todos", todoController);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
});

// {
//     "title":"Todo 1",
//     "description":"New Todo 1",
//     "status":"active"
// }
