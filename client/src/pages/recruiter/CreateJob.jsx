import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClipboardList,
  FaFileAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { createJob } from "../../services/jobService";

function CreateJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "full-time",
    description: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);

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

      const payload = {
        ...formData,
        salary: Number(formData.salary),
        requirements: formData.requirements
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      const data = await createJob(payload);

      toast.success(data.message);

      navigate("/recruiter/jobs");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create job"
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
          Post a New Job
        </h1>

        <p className="mt-4 text-blue-100 text-lg max-w-2xl">
          Reach thousands of talented professionals by
          publishing your job opening on CareerNest.
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
                placeholder="Software Engineer"
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
                placeholder="Company Name"
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
                placeholder="Bangalore"
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
                placeholder="800000"
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
              <option value="full-time">
                Full Time
              </option>

              <option value="part-time">
                Part Time
              </option>

              <option value="internship">
                Internship
              </option>

              <option value="remote">
                Remote
              </option>

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
              placeholder="Describe the job role..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

        </div>

        {/* Requirements */}

        <div className="mt-6">

          <label className="font-semibold mb-2 block">
            Requirements
          </label>

          <textarea
            rows="4"
            name="requirements"
            placeholder="React, Node.js, MongoDB, REST API"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <p className="text-sm text-gray-500 mt-2">
            Separate each requirement with a comma.
          </p>

        </div>

        {/* Submit */}

        <div className="mt-10">

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold flex justify-center items-center gap-3 transition disabled:opacity-60"
          >
            <FaPlusCircle />

            {loading
              ? "Publishing Job..."
              : "Publish Job"}

          </button>

        </div>

      </form>

    </div>
  );
}

export default CreateJob;