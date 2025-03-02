import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
