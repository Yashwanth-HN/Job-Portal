import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaSearch,
  FaClipboardList,
} from "react-icons/fa";
import { getJobSeekerDashboardStats } from "../../services/jobService";

function JobSeekerDashboard() {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    totalApplied: 0,
    accepted: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getJobSeekerDashboardStats();

      setStats({
        totalApplied: data.totalApplied,
        accepted: data.accepted,
        pending: data.pending,
        rejected: data.rejected,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

        <h1 className="text-5xl font-bold">
          Welcome Back,
          <span className="block text-yellow-300 mt-2">
            {user?.name} 👋
          </span>
        </h1>

        <p className="mt-5 text-blue-100 text-lg max-w-2xl leading-8">
          Track your job applications, monitor your hiring
          progress, and discover exciting new career opportunities
          with CareerNest.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <Link
            to="/jobs"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FaSearch />
            Explore Jobs
          </Link>

          <Link
            to="/jobseeker/applications"
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition flex items-center gap-2"
          >
            <FaClipboardList />
            My Applications
          </Link>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

        {/* Applied */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

            <FaBriefcase className="text-blue-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Applied Jobs
          </h2>

          <p className="text-5xl font-extrabold text-blue-600 mt-3">
            {stats.totalApplied}
          </p>

          <p className="text-gray-500 mt-2">
            Total applications submitted
          </p>

        </div>

        {/* Accepted */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

            <FaCheckCircle className="text-green-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Accepted
          </h2>

          <p className="text-5xl font-extrabold text-green-600 mt-3">
            {stats.accepted}
          </p>

          <p className="text-gray-500 mt-2">
            Applications accepted
          </p>

        </div>

        {/* Pending */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">

            <FaClock className="text-yellow-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Pending
          </h2>

          <p className="text-5xl font-extrabold text-yellow-600 mt-3">
            {stats.pending}
          </p>

          <p className="text-gray-500 mt-2">
            Waiting for recruiter response
          </p>

        </div>

        {/* Rejected */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

          <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

            <FaTimesCircle className="text-red-600 text-3xl" />

          </div>

          <h2 className="text-2xl font-bold mt-6">
            Rejected
          </h2>

          <p className="text-5xl font-extrabold text-red-600 mt-3">
            {stats.rejected}
          </p>

          <p className="text-gray-500 mt-2">
            Applications not selected
          </p>

        </div>

      </div>

      {/* Quick Tips */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Career Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-6 hover:bg-blue-50 transition">
            <h3 className="font-semibold text-lg">
              Complete Your Profile
            </h3>

            <p className="text-gray-500 mt-2">
              A complete profile helps recruiters notice you.
            </p>
          </div>

          <div className="border rounded-2xl p-6 hover:bg-blue-50 transition">
            <h3 className="font-semibold text-lg">
              Apply Regularly
            </h3>

            <p className="text-gray-500 mt-2">
              Increase your chances by applying to relevant jobs.
            </p>
          </div>

          <div className="border rounded-2xl p-6 hover:bg-blue-50 transition">
            <h3 className="font-semibold text-lg">
              Keep Learning
            </h3>

            <p className="text-gray-500 mt-2">
              Update your skills to unlock better opportunities.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default JobSeekerDashboard;