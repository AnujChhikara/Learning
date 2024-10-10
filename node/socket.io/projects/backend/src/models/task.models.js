import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  process: {
    type: Number,   
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;