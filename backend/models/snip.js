const mongoose = require("mongoose");

const snipsSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  language: String,
  labels: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Snip = mongoose.model("Snips", snipsSchema);

module.exports = Snip;
