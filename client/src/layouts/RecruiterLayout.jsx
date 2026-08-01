import { Outlet } from "react-router-dom";
import RecruiterSidebar from "../components/recruiter/RecruiterSidebar";

function RecruiterLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <RecruiterSidebar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}

export default RecruiterLayout;