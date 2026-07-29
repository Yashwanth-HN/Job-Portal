import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">

      <h2 className="text-xl font-bold">
        {job.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {job.company}
      </p>

      <div className="flex items-center gap-2 mt-4 text-gray-600">
        <FaMapMarkerAlt />
        {job.location}
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-600">
        <FaBriefcase />
        {job.jobType}
      </div>

      <p className="mt-4 text-blue-600 font-bold">
        ₹ {job.salary}
      </p>

      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;