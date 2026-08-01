import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaUsers,
  FaCheck,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import {
  getJobApplicants,
  updateApplicationStatus,
} from "../../services/jobService";
import { toast } from "react-toastify";

function Applicants() {
  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const data = await getJobApplicants(jobId);
      setApplications(data.applications || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (
    applicationId,
    status
  ) => {
    try {
      const data = await updateApplicationStatus(
        applicationId,
        status
      );

      toast.success(data.message);

      fetchApplicants();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update status"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading Applicants...
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">

            <FaUsers className="text-blue-600 text-3xl" />

          </div>

          <div>

            <h1 className="text-4xl font-bold">
              Job Applicants
            </h1>

            <p className="text-blue-100 mt-2">
              Review and manage applications for this job posting.
            </p>

          </div>

        </div>

      </div>

      {/* Empty */}

      {applications.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg p-16 text-center mt-10">

          <div className="text-7xl">
            👥
          </div>

          <h2 className="text-3xl font-bold mt-6">
            No Applicants Yet
          </h2>

          <p className="text-gray-500 mt-4">
            Applications will appear here once candidates apply.
          </p>

        </div>

      ) : (

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mt-10">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-5">
                    Candidate
                  </th>

                  <th className="text-left p-5">
                    Email
                  </th>

                  <th className="text-left p-5">
                    Applied On
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>

                  <th className="text-left p-5">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {applications.map((application) => (

                  <tr
                    key={application._id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    {/* Candidate */}

                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

                          <FaUserCircle className="text-blue-600 text-2xl" />

                        </div>

                        <div>

                          <h3 className="font-semibold">

                            {application.applicant?.name}

                          </h3>

                        </div>

                      </div>

                    </td>

                    {/* Email */}

                    <td className="p-5 text-gray-600">

                      {application.applicant?.email}

                    </td>

                    {/* Date */}

                    <td className="p-5">

                      {new Date(
                        application.createdAt
                      ).toLocaleDateString()}

                    </td>

                    {/* Status */}

                    <td className="p-5">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          application.status === "accepted"
                            ? "bg-green-100 text-green-700"
                            : application.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {application.status}
                      </span>

                    </td>

                    {/* Actions */}

                    <td className="p-5">

                      {application.status === "pending" ? (

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              handleStatusUpdate(
                                application._id,
                                "accepted"
                              )
                            }
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
                          >
                            <FaCheck />
                            Accept
                          </button>

                          <button
                            onClick={() =>
                              handleStatusUpdate(
                                application._id,
                                "rejected"
                              )
                            }
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
                          >
                            <FaTimes />
                            Reject
                          </button>

                        </div>

                      ) : (

                        <span className="text-gray-500 italic">
                          Completed
                        </span>

                      )}

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

export default Applicants;