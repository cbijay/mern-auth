const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

require("dotenv").config();

//Cors and json setup for api endpoints
app.use(cors());
app.use(express.json());

//Database Connection
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established successfully");
});

//Serving Static File
app.use(express.static(path.join(__dirname, "client/build")));

//Api Routes
const userRoute = require("./routes/userRoute");

app.use("/users", userRoute);

app.get("/test", (req, res) => {
  res.send("Test");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//Capture All 404 errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//Starting server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
