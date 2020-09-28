const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  password: { type: String, require: true, minlength: 8 },
  token: { type: String, required: true },
  active: { type: Boolean, required: true, default: false },
});

module.exports = User = mongoose.model("users", userSchema);
