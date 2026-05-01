import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-sky-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 text-center mb-8">
          Users List
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-[28px] bg-white/90 p-6 border border-slate-200 shadow-lg shadow-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">{user.name}</h2>
              <p className="text-slate-600 mb-6">{user.email}</p>
              <button
                onClick={() => navigate(`/user/${user.id}`)}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-emerald-600 hover:to-teal-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserPage;

