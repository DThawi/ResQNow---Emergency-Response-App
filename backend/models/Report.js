const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    latitude: Number,
    longitude: Number
  },
  media: String, // URL of the uploaded media
},
{  timestamps: true
});

module.exports = mongoose.model("Report", reportSchema);