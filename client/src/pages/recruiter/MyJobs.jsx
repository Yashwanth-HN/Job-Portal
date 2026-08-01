import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlusCircle,
  FaEdit,
  FaTrash,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import { toast } from "react-toastify";
import {
  getMyJobs,
  deleteJob,
} from "../../services/jobService";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getMyJobs();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteJob(id);

      toast.success(data.message);

      fetchJobs();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete job"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading Your Jobs...
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl mb-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div>

            <h1 className="text-5xl font-bold">
              My Jobs
            </h1>

            <p className="mt-4 text-blue-100 text-lg">
              Manage all your job postings from one place.
            </p>

          </div>

          <Link
            to="/recruiter/create-job"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FaPlusCircle />
            Create Job
          </Link>

        </div>

      </div>

      {/* Empty */}

      {jobs.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

          <div className="text-7xl">
            💼
          </div>

          <h2 className="text-3xl font-bold mt-6">
            No Jobs Posted Yet
          </h2>

          <p className="text-gray-500 mt-4">
            Create your first job posting to start
            receiving applications.
          </p>

          <Link
            to="/recruiter/create-job"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Create Job
          </Link>

        </div>

      ) : (

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100 sticky top-0">

                <tr>

                  <th className="text-left p-5">
                    Job
                  </th>

                  <th className="text-left p-5">
                    Company
                  </th>

                  <th className="text-left p-5">
                    Location
                  </th>

                  <th className="text-left p-5">
                    Type
                  </th>

                  <th className="text-left p-5">
                    Salary
                  </th>

                  <th className="text-center p-5">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {jobs.map((job) => (

                  <tr
                    key={job._id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="p-5">

                      <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                          <FaBriefcase className="text-blue-600" />

                        </div>

                        <span className="font-semibold">
                          {job.title}
                        </span>

                      </div>

                    </td>

                    <td className="p-5">
                      {job.company}
                    </td>

                    <td className="p-5">
                      {job.location}
                    </td>

                    <td className="p-5">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize">

                        {job.jobType}

                      </span>

                    </td>

                    <td className="p-5 font-semibold text-green-600">

                      ₹ {job.salary.toLocaleString()}

                    </td>

                    <td className="p-5">

                      <div className="flex justify-center gap-3">

                        <Link
                          to={`/recruiter/edit-job/${job._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl transition"
                          title="Edit Job"
                        >
                          <FaEdit />
                        </Link>

                        <button
                          onClick={() => handleDelete(job._id)}
                          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
                          title="Delete Job"
                        >
                          <FaTrash />
                        </button>

                        <Link
                          to={`/recruiter/applicants/${job._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition"
                          title="View Applicants"
                        >
                          <FaUsers />
                        </Link>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
}

export default MyJobs;