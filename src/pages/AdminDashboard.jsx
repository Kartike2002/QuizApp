export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <a
          href="/admin/users"
          className="p-6 border rounded-xl shadow hover:bg-gray-100"
        >
          Manage Users
        </a>

        <a
          href="/admin/questions"
          className="p-6 border rounded-xl shadow hover:bg-gray-100"
        >
          Manage Questions
        </a>
      </div>
    </div>
  );
}
