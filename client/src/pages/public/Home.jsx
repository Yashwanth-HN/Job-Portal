import Hero from "../../components/common/Hero";
import FeaturedJobs from "../../components/common/FeaturedJobs";
import JobCategories from "../../components/common/JobCategories";
import StatsSection from "../../components/common/StatsSection";
import Testimonials from "../../components/common/Testimonials";
import Newsletter from "../../components/common/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <JobCategories />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;