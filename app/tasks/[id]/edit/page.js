import { getTasks } from "@/lib/actions";
import { notFound } from "next/navigation";
import EditTaskForm from "@/components/EditTaskForm";

export default async function EditTask({ params }) {
  // Ensure params is properly destructured and used correctly
  if (!params || !params.id) {
    notFound();
  }

  const taskId = params.id; // No need to wrap it in String()

  const tasks = await getTasks();
  const task = tasks.find((t) => t._id.toString() === taskId);

  if (!task) {
    notFound();
  }

  // Convert the task to a plain JavaScript object
  const plainTask = {
    id: task._id.toString(),
    title: task.title,
    description: task.description,
    dueDate: task.dueDate ? task.dueDate.toISOString().split('T')[0] : ''
  };

  return <EditTaskForm task={plainTask} />;
}
