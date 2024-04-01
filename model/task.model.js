const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  creatorEmail: {
    type: String,
    require: true,
  },
  taskTitle: {
    type: String,
    required: true,
  },
  completion: {
    type: String,
    required: true,
  },
  teamLeader: {
    type: String,
    required: true,
  },
  teamMemberNums: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: Array,
    required: false,
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
