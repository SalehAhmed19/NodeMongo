const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

// app initialization
const app = express();
app.use(express.json());

// db connection
mongoose
  .connect("mongodb://localhost:todos")
  .then(() => {
    console.log("Connection succeeded");
  })
  .catch((err) => {
    console.log(err);
  });

// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Listenig on port ${PORT}`);
});
