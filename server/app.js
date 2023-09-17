const express = require("express");
const morgan = require("morgan");
const connectDb = require("./db/connect");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;

const authRouter = require("./routes/register");
const BMarkRouter = require("./routes/Bookmark");
const SpoonRouter = require("./routes/Spoonacular");
const verifyToken = require("./middleware/verifyToken");

app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use("/api/v1", authRouter);
app.use("/api/v1/spoon", SpoonRouter);
app.use("/api/v1/bmark", verifyToken, BMarkRouter);

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.get("*", (req, res) => {
  res.status(404).send("Page you requested doesn't exist :(");
});

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log("Server listening on port:", port);
    });
  } catch (error) {
    console.log({
      msg: "Error occured while kickstarting backend",
      error: error,
    });
  }
};

start();
