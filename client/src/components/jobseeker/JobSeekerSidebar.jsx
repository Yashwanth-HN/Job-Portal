import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";

function JobSeekerSidebar() {
  return (
    <aside className="w-72 bg-gray-900 text-white min-h-screen p-6">

      <h2 className="text-4xl font-bold mb-10">
        JobSeeker
      </h2>

      <nav className="space-y-3">

        <NavLink
          to="/jobseeker/dashboard"
          className={({ isActive }) =>
            `block p-4 rounded-xl ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaHome className="inline mr-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/jobseeker/applications"
          className={({ isActive }) =>
            `block p-4 rounded-xl ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaBriefcase className="inline mr-3" />
          My Applications
        </NavLink>

        <NavLink
          to="/jobseeker/profile"
          className={({ isActive }) =>
            `block p-4 rounded-xl ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaUser className="inline mr-3" />
          Profile
        </NavLink>

      </nav>

    </aside>
  );
}

export default JobSeekerSidebar;