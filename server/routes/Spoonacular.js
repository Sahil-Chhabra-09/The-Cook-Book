const express = require("express");
const spoonRouter = express.Router();
const {
  getPopular,
  getVeggie,
  getCuisine,
  getRecipe,
  getSearchResults,
} = require("../controllers/Spoonacular");

spoonRouter.route("/popular").get(getPopular);
spoonRouter.route("/veggie").get(getVeggie);
spoonRouter.route("/cuisine").get(getCuisine);
spoonRouter.route("/recipe").get(getRecipe);
spoonRouter.route("/searched").get(getSearchResults);

module.exports = spoonRouter;
