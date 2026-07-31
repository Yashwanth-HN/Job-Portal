function FilterSidebar({
  location,
  setLocation,
  jobType,
  setJobType,
  
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Location */}
      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="block mb-2">Job Type</label>

       <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
        >
        <option value="">All</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="internship">Internship</option>
        <option value="remote">Remote</option>
        </select>
      </div>

      
    </div>
  );
}

export default FilterSidebar;