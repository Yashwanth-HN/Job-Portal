import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClipboardList,
  FaFileAlt,
  FaSave,
} from "react-icons/fa";
import { getJobById, updateJob } from "../../services/jobService";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "full-time",
    description: "",
  });

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id);

      setFormData({
        title: data.job.title,
        company: data.job.company,
        location: data.job.location,
        salary: data.job.salary,
        jobType: data.job.jobType,
        description: data.job.description,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load job details");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateJob(id, {
        ...formData,
        salary: Number(formData.salary),
      });

      toast.success("Job updated successfully");

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl mb-10">

        <h1 className="text-5xl font-bold">
          Edit Job
        </h1>

        <p className="mt-4 text-blue-100 text-lg max-w-2xl">
          Update the job posting and keep candidates informed with the latest information.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-lg p-8"
      >

        <div className="grid md:grid-cols-2 gap-6">

          {/* Job Title */}

          <div>

            <label className="font-semibold mb-2 block">
              Job Title
            </label>

            <div className="relative">

              <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Company */}

          <div>

            <label className="font-semibold mb-2 block">
              Company
            </label>

            <div className="relative">

              <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Location */}

          <div>

            <label className="font-semibold mb-2 block">
              Location
            </label>

            <div className="relative">

              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Salary */}

          <div>

            <label className="font-semibold mb-2 block">
              Salary
            </label>

            <div className="relative">

              <FaMoneyBillWave className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

        </div>

        {/* Job Type */}

        <div className="mt-6">

          <label className="font-semibold mb-2 block">
            Job Type
          </label>

          <div className="relative">

            <FaClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>

          </div>

        </div>

        {/* Description */}

        <div className="mt-6">

          <label className="font-semibold mb-2 block">
            Job Description
          </label>

          <div className="relative">

            <FaFileAlt className="absolute left-4 top-5 text-gray-400" />

            <textarea
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>

        {/* Submit */}

        <div className="mt-10">

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold flex justify-center items-center gap-3 transition disabled:opacity-60"
          >
            <FaSave />

            {loading
              ? "Updating Job..."
              : "Update Job"}

          </button>

        </div>

      </form>

    </div>
  );
}

export default EditJob;