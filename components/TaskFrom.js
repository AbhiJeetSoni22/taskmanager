export default function TaskForm({ action, defaultValues = {} }) {
  return (
    <form action={action} className="bg-white rounded-xl shadow-md p-8 max-w-xl mx-auto mt-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input 
            id="title"
            name="title" 
            defaultValue={defaultValues.title} 
            required 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Enter task title"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            id="description"
            name="description" 
            defaultValue={defaultValues.description} 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 min-h-[100px]"
            placeholder="Enter task description"
          />
        </div>
        
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input 
            id="dueDate"
            name="dueDate" 
            type="date" 
            defaultValue={defaultValues.dueDate ? new Date(defaultValues.dueDate).toISOString().split('T')[0] : ''}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          />
        </div>

        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md"
        >
          {defaultValues.title ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
}