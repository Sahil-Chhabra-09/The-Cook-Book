const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 40,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 11,
    max: 40,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
