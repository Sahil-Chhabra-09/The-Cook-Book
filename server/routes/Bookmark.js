const express = require("express");
const {
  addBookmark,
  getBookmarks,
  deleteBookmark,
  isBookmarked,
} = require("../controllers/Bookmark");
const BMarkRouter = express.Router();

BMarkRouter.route("/").get(getBookmarks).post(addBookmark);

BMarkRouter.route("/delete").post(deleteBookmark);

BMarkRouter.route("/check").post(isBookmarked);

module.exports = BMarkRouter;
