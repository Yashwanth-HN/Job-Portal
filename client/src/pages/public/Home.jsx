import Hero from "../../components/common/Hero";
import FeaturedJobs from "../../components/common/FeaturedJobs";
import JobCategories from "../../components/common/JobCategories";
import TopCompanies from "../../components/common/TopCompanies";
import StatsSection from "../../components/common/StatsSection";
import Testimonials from "../../components/common/Testimonials";
import Newsletter from "../../components/common/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <JobCategories />
      <TopCompanies />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;