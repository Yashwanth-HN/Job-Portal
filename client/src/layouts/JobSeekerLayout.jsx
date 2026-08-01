import { Outlet } from "react-router-dom";
import JobSeekerSidebar from "../components/jobseeker/JobSeekerSidebar";

function JobSeekerLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <JobSeekerSidebar />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default JobSeekerLayout;