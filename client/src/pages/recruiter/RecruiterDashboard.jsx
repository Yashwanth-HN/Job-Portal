import {
  FaBriefcase,
  FaUsers,
  FaPlusCircle,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getDashboardStats } from "../../services/jobService";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplicants: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();

      setStats({
        totalJobs: data.totalJobs,
        totalApplicants: data.totalApplicants,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">

        <h1 className="text-5xl font-bold">
          Welcome back,
          <span className="block text-yellow-300 mt-2">
            {user?.name} 👋
          </span>
        </h1>

        <p className="mt-5 text-blue-100 text-lg max-w-2xl">
          Manage job postings, review applicants,
          and track your hiring progress from one place.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <Link
            to="/recruiter/create-job"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FaPlusCircle />
            Post New Job
          </Link>

          <Link
            to="/recruiter/my-jobs"
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition flex items-center gap-2"
          >
            <FaClipboardList />
            Manage Jobs
          </Link>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

            <FaBriefcase className="text-blue-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Total Jobs
          </h2>

          <p className="text-5xl font-extrabold text-blue-600 mt-3">
            {stats.totalJobs}
          </p>

          <p className="text-gray-500 mt-3">
            Jobs currently posted
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

            <FaUsers className="text-green-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Applicants
          </h2>

          <p className="text-5xl font-extrabold text-green-600 mt-3">
            {stats.totalApplicants}
          </p>

          <p className="text-gray-500 mt-3">
            Total applications received
          </p>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

        <h2 className="text-3xl font-bold mb-8">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            to="/recruiter/create-job"
            className="border rounded-2xl p-6 hover:bg-blue-50 transition flex justify-between items-center"
          >
            <div>

              <h3 className="text-xl font-semibold">
                Post a New Job
              </h3>

              <p className="text-gray-500 mt-2">
                Create and publish a new job opening.
              </p>

            </div>

            <FaArrowRight className="text-blue-600 text-xl" />

          </Link>

          <Link
            to="/recruiter/my-jobs"
            className="border rounded-2xl p-6 hover:bg-blue-50 transition flex justify-between items-center"
          >
            <div>

              <h3 className="text-xl font-semibold">
                Manage Jobs
              </h3>

              <p className="text-gray-500 mt-2">
                View, edit, or remove your job postings.
              </p>

            </div>

            <FaArrowRight className="text-blue-600 text-xl" />

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;