const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  recipes: {
    type: Array,
    required: true,
  },
});

const BMark = mongoose.model("BMark", bookmarkSchema);

module.exports = BMark;
