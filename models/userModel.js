const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  full_name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true, minlength: 8 },
});

module.exports = User = mongoose.model("users", userSchema);
