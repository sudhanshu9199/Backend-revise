const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
});

const noteModel = mongoose.model("rNote", noteSchema);

module.exports = noteModel;
