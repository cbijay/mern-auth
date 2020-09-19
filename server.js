const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
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
app.use(express.static("./client/build"));

//Api Routes
const userRoute = require("./routes/userRoute");

app.use("/users", userRoute);

//Starting server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
