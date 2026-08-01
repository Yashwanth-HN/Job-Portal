import { useEffect, useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllJobs } from "../../services/jobService";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const data = await getAllJobs();

      const jobs = data.jobs || data;

      const grouped = {};

      jobs.forEach((job) => {
        if (!grouped[job.company]) {
          grouped[job.company] = {
            company: job.company,
            location: job.location,
            jobs: 0,
          };
        }

        grouped[job.company].jobs++;
      });

      setCompanies(Object.values(grouped));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-xl mt-10">
        Loading Companies...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold">
          Top Companies
        </h1>

        <p className="text-gray-500 mt-3">
          Explore companies currently hiring.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {companies.map((company, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >

            <FaBuilding
              className="text-blue-600 text-5xl mb-5"
            />

            <h2 className="text-2xl font-bold">
              {company.company}
            </h2>

            <div className="flex items-center gap-2 text-gray-600 mt-4">
              <FaMapMarkerAlt />
              {company.location}
            </div>

            <div className="flex items-center gap-2 text-gray-600 mt-3">
              <FaBriefcase />
              {company.jobs} Job
              {company.jobs > 1 ? "s" : ""}
            </div>

            <Link
              to="/jobs"
              className="block mt-6 text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              View Jobs
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Companies;