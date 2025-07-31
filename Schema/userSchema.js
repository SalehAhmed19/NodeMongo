const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: addressSchema,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
