const express = require("express");
const User = require("../Schema/userSchema");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();

  console.log(result);
});

module.exports = router;
