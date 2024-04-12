const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  profileImage: {
    type: String,
  },
  summary: { type: String },
});

module.exports = mongoose.model("Profile", profileSchema);
