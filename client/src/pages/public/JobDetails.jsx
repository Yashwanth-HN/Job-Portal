import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";
import { applyJob } from "../../services/jobService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleApply = async () => {
  try {
    const data = await applyJob(job._id);

    toast.success(data.message || "Application submitted successfully!");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Failed to apply."
    );
  }
};

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

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center mt-20 text-2xl">
        Job not found.
      </div>
    );
  }

  return (
    
    <div className="max-w-5xl mx-auto px-6 py-10">
       <div className="mb-6">
        <button
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
            <FaArrowLeft />
            Back to Jobs
        </button>
        </div>
      <div className="bg-white rounded-2xl shadow-lg p-8">
         
        <h1 className="text-4xl font-bold">
          {job.title}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          {job.company}
        </p>

        <div className="flex gap-6 mt-6 text-gray-600">
          <span>📍 {job.location}</span>
          <span>💼 {job.jobType}</span>
          <span className="font-bold text-green-600">
            ₹ {job.salary?.toLocaleString()}
          </span>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-semibold">
          Job Description
        </h2>

        <p className="mt-3 text-gray-700 leading-8">
          {job.description}
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Requirements
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          {job.requirements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
        onClick={handleApply}
        className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
        Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;