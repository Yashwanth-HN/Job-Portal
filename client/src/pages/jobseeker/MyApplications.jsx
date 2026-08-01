import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
  FaEye,
  FaClipboardList,
} from "react-icons/fa";
import { getMyApplications } from "../../services/jobService";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data.applications || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading Applications...
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl mb-10">

        <h1 className="text-5xl font-bold">
          My Applications
        </h1>

        <p className="mt-4 text-blue-100 text-lg">
          Track the status of every job application you've submitted.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 bg-white/20 px-5 py-3 rounded-xl">

          <FaClipboardList />

          <span className="font-semibold">
            {applications.filter(app => app.job).length} Applications
          </span>

        </div>

      </div>

      {/* Empty State */}

      {applications.filter(app => app.job).length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

          <div className="text-7xl mb-6">
            📄
          </div>

          <h2 className="text-3xl font-bold">
            No Applications Yet
          </h2>

          <p className="text-gray-500 mt-4">
            Start exploring jobs and submit your first application.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
          >
            Explore Jobs
          </Link>

        </div>

      ) : (

        <div className="grid lg:grid-cols-2 gap-8">

          {applications
            .filter((application) => application.job)
            .map((application) => (

              <div
                key={application._id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8"
              >

                {/* Header */}

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                    <FaBriefcase className="text-blue-600 text-2xl" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {application.job.title}
                    </h2>

                    <p className="text-gray-500">
                      {application.job.company}
                    </p>

                  </div>

                </div>

                {/* Details */}

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-gray-600">

                    <FaBuilding className="text-blue-600" />

                    {application.job.company}

                  </div>

                  <div className="flex items-center gap-3 text-gray-600">

                    <FaMapMarkerAlt className="text-blue-600" />

                    {application.job.location}

                  </div>

                  <div className="flex items-center gap-3 text-gray-600">

                    <FaClock className="text-blue-600" />

                    Applied on{" "}
                    {new Date(
                      application.createdAt
                    ).toLocaleDateString()}

                  </div>

                </div>

                {/* Footer */}

                <div className="flex justify-between items-center mt-8">

                  <span
                    className={`px-5 py-2 rounded-full font-semibold text-sm ${
                      application.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : application.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </span>

                  <Link
                    to={`/jobs/${application.job._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
                  >
                    <FaEye />

                    View Job

                  </Link>

                </div>

              </div>

            ))}

        </div>

      )}

    </div>
  );
}

export default MyApplications;