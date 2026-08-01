import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getAllJobs } from "../../services/jobService";
import JobCard from "./JobCard";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();

      // Show only latest 6 jobs
      setJobs((data.jobs || []).slice(0, 6));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <p className="text-center mt-6 text-gray-600 text-lg">
          Loading featured jobs...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Featured Opportunities
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Latest Jobs
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Explore the newest opportunities from verified companies
            and take the next step toward your dream career.
          </p>

        </div>

        {/* Empty State */}

        {jobs.length === 0 ? (
          <div className="text-center py-20">

            <h3 className="text-3xl font-bold">
              No Jobs Available
            </h3>

            <p className="text-gray-500 mt-4">
              New opportunities will appear here soon.
            </p>

          </div>
        ) : (
          <>
            {/* Jobs */}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {jobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                />
              ))}

            </div>

            {/* View All */}

            <div className="text-center mt-14">

              <Link
                to="/jobs"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                View All Jobs

                <FaArrowRight />

              </Link>

            </div>
          </>
        )}

      </div>

    </section>
  );
}

export default FeaturedJobs;