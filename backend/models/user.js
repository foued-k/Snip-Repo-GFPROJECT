const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  snips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Snip" }],
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
