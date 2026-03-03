export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <a href="/" className="p-3 rounded hover:bg-gray-800">🏠 Dashboard</a>
      <a href="/settings" className="p-3 rounded hover:bg-gray-800">⚙️ Settings</a>
      <a href="/logs" className="p-3 rounded hover:bg-gray-800">📋 Activity Logs</a>
      <div className="flex-1" />
    </div>
  );
}