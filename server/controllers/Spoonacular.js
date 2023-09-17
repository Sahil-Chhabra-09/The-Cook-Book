const axios = require("axios");

const getPopular = async (req, res) => {
  try {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=20`
      )
      .then((res) => {
        res.status(200).json({ success: true, recipes: response.data.recipes });
      });
  } catch (error) {
    console.log("Error: Possible because of crossed daily limit for API key 1");
    try {
      const response2 = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY2}&number=20`
      );
      res.status(200).json({ success: true, recipes: response2.data.recipes });
    } catch (error2) {
      console.log("Error again");
      res.status(500).json({ success: false });
    }
  }
};

const getVeggie = async (req, res) => {
  try {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=9&tags=vegetarian`
      )
      .then((response) => {
        res.status(200).json({ success: true, recipes: response.data.recipes });
      })
      .catch((error) => {
        console.log(
          "error: possible because of crossed daily limit for api key 1"
        );
      });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const getCuisine = async (req, res) => {
  try {
    const { name } = req.query;
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY2}&number=10&cuisine=${name}`
      )
      .then((response) => {
        res.status(200).json({ success: true, results: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { name } = req.query;
    axios
      .get(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.SPOONACULAR_API_KEY2}`
      )
      .then((response) => {
        res.status(200).json({ success: true, data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const getSearchResults = async (req, res) => {
  try {
    const { name } = req.query;
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY2}&number=12&query=${name}`
      )
      .then((response) => {
        res.status(200).json({ success: true, results: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

module.exports = {
  getPopular,
  getVeggie,
  getCuisine,
  getRecipe,
  getSearchResults,
};
