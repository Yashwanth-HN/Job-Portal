import {
  FaFilter,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRedo,
} from "react-icons/fa";

function FilterSidebar({
  location,
  setLocation,
  jobType,
  setJobType,
}) {
  const clearFilters = () => {
    setLocation("");
    setJobType("");
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sticky top-24">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

          <FaFilter className="text-blue-600 text-xl" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Filters
          </h2>

          <p className="text-sm text-gray-500">
            Refine your job search
          </p>

        </div>

      </div>

      {/* Location */}

      <div className="mb-6">

        <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">

          <FaMapMarkerAlt className="text-blue-600" />

          Location

        </label>

        <input
          type="text"
          placeholder="e.g. Bangalore"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

      </div>

      {/* Job Type */}

      <div className="mb-8">

        <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">

          <FaBriefcase className="text-blue-600" />

          Job Type

        </label>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Job Types</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="internship">Internship</option>
          <option value="remote">Remote</option>
        </select>

      </div>

      {/* Clear Filters */}

      <button
        onClick={clearFilters}
        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition"
      >
        <FaRedo />

        Clear Filters

      </button>

    </div>
  );
}

export default FilterSidebar;