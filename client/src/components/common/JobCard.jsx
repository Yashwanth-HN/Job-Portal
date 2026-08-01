import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function JobCard({ job }) {

  const formatSalary = (salary) => {
    if (!salary) return "Not Disclosed";

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const formatDate = (date) => {
    if (!date) return "Recently Posted";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

          <FaBuilding className="text-blue-600 text-2xl" />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900">

            {job.title}

          </h2>

          <p className="text-gray-500 mt-1">

            {job.company}

          </p>

        </div>

      </div>

      {/* Job Info */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3 text-gray-600">

          <FaMapMarkerAlt className="text-blue-600" />

          <span>{job.location}</span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <FaBriefcase className="text-blue-600" />

          <span className="capitalize">

            {job.jobType}

          </span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <FaMoneyBillWave className="text-green-600" />

          <span className="font-semibold text-green-700">

            {formatSalary(job.salary)}

          </span>

        </div>

        <div className="flex items-center gap-3 text-gray-500 text-sm">

          <FaClock />

          Posted on {formatDate(job.createdAt)}

        </div>

      </div>

      {/* Badges */}

      <div className="flex flex-wrap gap-3 mt-6">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">

          {job.jobType}

        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

          Verified

        </span>

      </div>

      {/* Button */}

      <Link
        to={`/jobs/${job._id}`}
        className="block mt-8 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-2xl font-semibold transition-all duration-300 group-hover:shadow-lg"
      >
        View Details
      </Link>

    </div>
  );
}

export default JobCard;