require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running fine and dandy on PORT: ${PORT}`);
});
