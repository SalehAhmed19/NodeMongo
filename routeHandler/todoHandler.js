const express = require("express");
const router = express.Router();

// get all todos
router.get("/", async (req, res) => {});

// get a todo by id
router.get("/:id", async (req, res) => {});

// post todo
router.post("/", async (req, res) => {});

// post todos
router.post("/all", async (req, res) => {});

// put todos
router.put("/:id", async (req, res) => {});

// delete todos
router.delete("/:id", async (req, res) => {});

module.exports = router;
