const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  department: String,
  year: Number,
  password: String
});

module.exports = mongoose.model("Student", studentSchema);