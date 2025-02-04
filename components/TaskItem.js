"use client";
import { useState } from "react";
import { deleteTask, updateTask } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function TaskItem({ task }) {
  const router = useRouter();
  const [completed, setCompleted] = useState(task.completed);

  const toggleComplete = async () => {
    try {
      const updateData = {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        completed: !completed
      };
      // Use task.id instead of task._id
      await updateTask(task.id, updateData);
      setCompleted(!completed);
      router.refresh();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      // Use task.id instead of task._id
      const result = await deleteTask(task.id);
      if (result.success) {
        router.refresh();
      } else {
        console.error("Failed to delete task:", result.error);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className={`text-lg font-medium ${completed ? "line-through text-gray-400" : "text-gray-900"}`}>
            {task.title}
          </h2>
          <p className="text-gray-500 mt-1">{task.description}</p>
          {task.dueDate && (
            <p className="text-sm text-blue-600 mt-2">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleComplete}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              completed 
                ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
                : "bg-green-100 text-green-600 hover:bg-green-200"
            }`}
          >
            {completed ? "Undo" : "Complete"}
          </button>
          <a 
            href={`/tasks/${task.id}/edit`}
            className="px-3 py-1 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm font-medium"
          >
            Edit
          </a>
          <button 
            onClick={handleDelete}
            className="px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
