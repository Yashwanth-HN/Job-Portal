import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { getJobById, applyJob } from "../../services/jobService";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id);
      setJob(data.job || data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    try {
      const data = await applyJob(job._id);

      toast.success(
        data.message ||
          "Application submitted successfully!"
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to apply."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading Job Details...
        </p>

      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-24">

        <div className="text-7xl mb-6">
          📄
        </div>

        <h2 className="text-4xl font-bold">
          Job Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          The requested job no longer exists.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back */}

        <button
          onClick={() => navigate("/jobs")}
          className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 mb-8"
        >
          <FaArrowLeft />
          Back to Jobs
        </button>

        {/* Hero */}

        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">

                  <FaBuilding className="text-blue-600 text-3xl" />

                </div>

                <div>

                  <h1 className="text-4xl font-bold">

                    {job.title}

                  </h1>

                  <p className="text-blue-100 mt-2 text-lg">

                    {job.company}

                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <span className="bg-white/20 px-4 py-2 rounded-full">

                  📍 {job.location}

                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full">

                  💼 {job.jobType}

                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full">

                  💰 ₹ {job.salary?.toLocaleString()}

                </span>

              </div>

            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-6 min-w-[250px]">

              <h3 className="text-xl font-bold mb-5">

                Quick Apply

              </h3>

              <button
                onClick={handleApply}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Apply Now
              </button>

            </div>

          </div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="lg:col-span-2 space-y-8">

            {/* Description */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">

                Job Description

              </h2>

              <p className="text-gray-700 leading-8">

                {job.description}

              </p>

            </div>

            {/* Requirements */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">

                Requirements

              </h2>

              <div className="flex flex-wrap gap-3">

                {job.requirements?.map((item, index) => (

                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">

                Job Overview

              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-3">

                  <FaBuilding className="text-blue-600" />

                  <span>{job.company}</span>

                </div>

                <div className="flex items-center gap-3">

                  <FaMapMarkerAlt className="text-blue-600" />

                  <span>{job.location}</span>

                </div>

                <div className="flex items-center gap-3">

                  <FaBriefcase className="text-blue-600" />

                  <span>{job.jobType}</span>

                </div>

                <div className="flex items-center gap-3">

                  <FaMoneyBillWave className="text-green-600" />

                  <span>

                    ₹ {job.salary?.toLocaleString()}

                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-blue-600" />

                  <span>

                    {new Date(
                      job.createdAt
                    ).toLocaleDateString()}

                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-green-600" />

                  <span>Verified Job</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;