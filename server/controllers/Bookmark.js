const BMark = require("../models/Bookmark");

const getBookmarks = async (req, res) => {
  try {
    const { uid } = req.query;
    const bookmarks = await BMark.find({ uid: String(uid) });
    res.status(200).json({ success: true, bookmarks: bookmarks });
  } catch (error) {
    res.status(500).json({ msg: "Couldn't get bookmarks", error: error.msg });
  }
};

const addBookmark = async (req, res) => {
  try {
    const { uid, bookmark } = req.body;

    const existingBookmark = await BMark.findOneAndUpdate(
      { uid: uid },
      { $push: { recipes: bookmark } },
      { upsert: true, new: true }
    );

    res.status(201).json({ success: true, bookmarks: existingBookmark });
  } catch (error) {
    res.status(500).json({ msg: "Couldn't get bookmarks", error: error.msg });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const { uid, bookmark } = req.body;
    const updatedBookmark = await BMark.findOneAndUpdate(
      { uid: uid },
      { $pull: { recipes: bookmark } },
      { new: true }
    );

    res.status(200).json({ success: true, bookmarks: updatedBookmark });
  } catch (error) {
    res.status(500).json({ msg: "Couldn't get bookmarks", error: error.msg });
  }
};

const isBookmarked = async (req, res) => {
  try {
    const { uid, bookmark } = req.body;

    const bookmarks = await BMark.findOne({ uid: uid });

    if (!bookmarks) {
      return res.status(200).json({ exists: false });
    }

    for (const recipe of bookmarks.recipes) {
      if (recipe.id == bookmark.id) {
        return res.status(200).json({ exists: true });
      }
    }

    res.status(200).json({ exists: false });
  } catch (error) {
    res.status(500).json({ msg: "Couldn't get bookmarks", error: error.msg });
  }
};

module.exports = { getBookmarks, addBookmark, deleteBookmark, isBookmarked };
