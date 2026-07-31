import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "../../components/common/JobCard";
import SearchBar from "../../components/common/SearchBar";
import FilterSidebar from "../../components/common/FilterSidebar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data.jobs || data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const normalize = (str = "") =>
  str.toLowerCase().trim().replace(/[\s-]/g, "");

const filteredJobs = jobs.filter((job) => {
  const matchesSearch = `${job.title} ${job.company}`
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesLocation =
    !location ||
    job.location?.toLowerCase().includes(location.toLowerCase());

  const matchesJobType =
    !jobType ||
    normalize(job.jobType) === normalize(jobType);

  return (
    matchesSearch &&
    matchesLocation &&
    matchesJobType
  );
});

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold animate-pulse">
          Loading Jobs...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Find Your Dream Job
        </h1>

        <p className="text-gray-500 mt-2">
          Browse hundreds of opportunities from top companies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}

        <div>
          <FilterSidebar
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
           
          />
        </div>

        {/* Jobs */}

        <div className="lg:col-span-3">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center mt-6">
              <h2 className="text-2xl font-semibold">
                No Jobs Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                />
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Jobs;