const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//creating a model

module.exports = mongoose.model("section", sectionSchema);
