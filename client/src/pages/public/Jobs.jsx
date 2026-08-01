import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "../../components/common/JobCard";
import SearchBar from "../../components/common/SearchBar";
import FilterSidebar from "../../components/common/FilterSidebar";
import EmptyState from "../../components/common/EmptyState";

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
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-xl text-gray-600">
          Loading opportunities...
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 mb-10 text-white shadow-2xl">

          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="relative">

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              Career Opportunities
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
              Find Your
              <span className="block text-yellow-300">
                Dream Career
              </span>
            </h1>

            <p className="text-blue-100 mt-6 text-lg leading-8 max-w-2xl">
              Explore verified opportunities from leading
              companies and take the next step in your
              professional journey with CareerNest.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <div className="bg-white/15 rounded-2xl px-6 py-4">

                <h2 className="text-3xl font-bold">
                  {jobs.length}+
                </h2>

                <p className="text-blue-100">
                  Jobs Available
                </p>

              </div>

              <div className="bg-white/15 rounded-2xl px-6 py-4">

                <h2 className="text-3xl font-bold">
                  Verified
                </h2>

                <p className="text-blue-100">
                  Companies
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Content */}

        <div className="grid lg:grid-cols-4 gap-8 mt-8">

          {/* Sidebar */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

              <FilterSidebar
                location={location}
                setLocation={setLocation}
                jobType={jobType}
                setJobType={setJobType}
              />

            </div>

          </div>

          {/* Jobs */}

          <div className="lg:col-span-3">

            {filteredJobs.length === 0 ? (

              <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

                <div className="text-7xl">
                  📄
                </div>

                <h2 className="text-3xl font-bold mt-6">
                  <EmptyState
                  icon="💼"
                  title="No Jobs Found"
                  description="Try changing your search filters."
                />
                </h2>

                <p className="text-gray-500 mt-4">
                  We couldn't find any jobs matching
                  your search criteria.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setLocation("");
                    setJobType("");
                  }}
                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
                >
                  Clear Filters
                </button>

              </div>

            ) : (

              <>

                <div className="flex justify-between items-center mb-6">

                  <h2 className="text-2xl font-bold">

                    {filteredJobs.length} Jobs Found

                  </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                  {filteredJobs.map((job) => (
                    <JobCard
                      key={job._id}
                      job={job}
                    />
                  ))}

                </div>

              </>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Jobs;