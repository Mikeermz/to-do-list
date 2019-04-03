const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { "collection": "tasks", "timestamps": true });


module.exports = mongoose.model("Task", TaskSchema);
