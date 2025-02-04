'use server';
import { revalidatePath } from 'next/cache';
import connectDB from "@/lib/db";
import Task from "@/models/Task";



export async function createTask(formData) {
  await connectDB();
  
  const task = {
    title: formData.get('title'),
    description: formData.get('description'),
    dueDate: formData.get('dueDate'),
    completed: false
  };

  try {
    await Task.create(task);
    revalidatePath('/tasks');
 
    return { success: true };
  } catch (error) {
    console.error('Failed to create task:', error);
    return { success: false, error: 'Failed to create task' };
  }
}

export async function getTasks() {
  await connectDB();
  return await Task.find().lean(); // Converts Mongoose documents to plain objects
}

export async function updateTask(id, formData) {
  await connectDB();
  
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        completed: formData.completed
      },
      { new: true }
    );
    revalidatePath('/tasks');
    return { success: true, task: updatedTask };
  } catch (error) {
    console.error('Error updating task:', error);
    return { success: false, error: 'Failed to update task' };
  }
}

export async function deleteTask(id) {
  try {
    await connectDB();
    await Task.findByIdAndDelete(id);
    revalidatePath('/tasks');
    return { success: true };
  } catch (error) {
    console.error('Error deleting task:', error);
    return { success: false, error: 'Failed to delete task' };
  }
}