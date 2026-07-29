import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "./JobCard";

function FeaturedJobs() {

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data = await getAllJobs();

        setJobs(data.jobs || []);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchJobs();

  }, []);

  if (loading)
    return (
      <h2 className="text-center text-2xl py-20">
        Loading Jobs...
      </h2>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}

      </div>

    </section>
  );
}

export default FeaturedJobs;