const express = require("express");
const Todo = require("../schema/todoSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Todo.find({});
  if (result) {
    res.status(200).send(result);
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  const result = await newTodo.save();
  if (result) {
    res.status(200).send({ message: "Todo added" });
  } else {
    res.status(400).send({ message: "Failed to add Todo" });
  }
});

router.put("/:id", async (req, res) => {
  //   const result = await Todo.updateOne(
  //     { _id: req.params.id },
  //     {
  //       $set: {
  //         status: "active",
  //       },
  //     }
  //   );
  const result = await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "inactive",
      },
    },
    {
      new: true,
    }
  );

  if (result) {
    res.status(200).send({ message: "Todo updates" });
    res.send(result);
  } else {
    res.status(400).send({ message: "Failed to updated Todo" });
  }

  console.log(result);
});

module.exports = router;
