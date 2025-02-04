export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden md:max-w-2xl p-10 border border-white/20">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Task Manager
        </h1>
        <p className="text-center text-gray-600 mb-8">Organize your tasks efficiently and boost your productivity</p>
        <div className="flex justify-center gap-4">
          <a 
            href="/tasks" 
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
          >
            Get Started →
          </a>
        </div>
      </div>
    </div>
  );
}