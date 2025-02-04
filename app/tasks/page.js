import { getTasks } from "@/lib/actions";
import TaskItem from "@/components/TaskItem";

export default async function TaskList() {
  const tasks = await getTasks();
  
  // Convert tasks to plain objects with proper date handling
  const plainTasks = tasks.map(task => ({
    id: task._id.toString(), // Make sure to convert MongoDB's _id to string
    title: task.title,
    description: task.description,
    dueDate: task.dueDate ,
    completed: task.completed,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              My Tasks
            </h1>
            <p className="mt-2 text-gray-600">Manage and organize your tasks efficiently</p>
          </div>
          <a 
            href="/tasks/new" 
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span className="text-xl mr-2">+</span> 
            New Task
          </a>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {plainTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-gray-500 text-lg mb-4">No tasks yet</p>
              <a 
                href="/tasks/new"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Create your first task →
              </a>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {plainTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}