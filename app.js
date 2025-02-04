require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const userRouter = require("./routes/userRouter");

const assetsPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running fine and dandy on PORT: ${PORT}`);
});
