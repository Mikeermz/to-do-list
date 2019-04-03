const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String, 
    required: true,
    unique: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, { "collection": "tasks", "timestamps": true });


module.exports = mongoose.model("Task", TaskSchema);
