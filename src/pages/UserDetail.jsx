import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [params.userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-sky-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white/95 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-8">
          User Details
        </h1>

        {!user ? (
          <p className="text-center text-slate-700 py-12">Loading user details…</p>
        ) : (
          <div className="space-y-4 text-slate-700 text-base sm:text-lg">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">ID</p>
              <p>{params.userId}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Name</p>
              <p>{user.name}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Phone</p>
              <p>{user.phone}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Website</p>
              <p>{user.website}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Company</p>
              <p>{user.company?.name}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Address</p>
              <p>
                {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserDetails;