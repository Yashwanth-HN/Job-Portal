import {
  FaBriefcase,
  FaUsers,
  FaSearch,
  FaShieldAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiJsonwebtokens } from "react-icons/si";

function About() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About JobPortal
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting talented professionals with top companies through a
            simple, secure, and modern recruitment platform.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center">
          Our Mission
        </h2>

        <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto text-lg leading-8">
          Our mission is to simplify the hiring process by helping recruiters
          find the right talent and enabling job seekers to discover the best
          career opportunities with an easy-to-use platform.
        </p>

      </section>

      {/* Features */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <FaBriefcase className="text-5xl text-blue-600 mx-auto" />
              <h3 className="text-xl font-bold mt-5">
                Job Listings
              </h3>
              <p className="text-gray-600 mt-3">
                Explore jobs across multiple companies and locations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <FaUsers className="text-5xl text-green-600 mx-auto" />
              <h3 className="text-xl font-bold mt-5">
                Recruiter Dashboard
              </h3>
              <p className="text-gray-600 mt-3">
                Manage job postings and applicants with ease.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <FaSearch className="text-5xl text-yellow-500 mx-auto" />
              <h3 className="text-xl font-bold mt-5">
                Smart Search
              </h3>
              <p className="text-gray-600 mt-3">
                Search and filter jobs quickly based on your preferences.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
              <FaShieldAlt className="text-5xl text-red-500 mx-auto" />
              <h3 className="text-xl font-bold mt-5">
                Secure Login
              </h3>
              <p className="text-gray-600 mt-3">
                JWT-based authentication ensures secure access.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Technology Stack */}
      {/*<section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Built With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              { icon: <FaReact size={50} className="text-sky-500" />, name: "React" },
              { icon: <FaNodeJs size={50} className="text-green-600" />, name: "Node.js" },
              { icon: <SiExpress size={50} />, name: "Express" },
              { icon: <FaDatabase size={50} className="text-green-700" />, name: "MongoDB" },
              { icon: <SiTailwindcss size={50} className="text-cyan-500" />, name: "Tailwind" },
              { icon: <SiJsonwebtokens size={50} className="text-orange-500" />, name: "JWT" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="flex justify-center">
                  {tech.icon}
                </div>

                <p className="font-semibold mt-4">
                  {tech.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>*/}

      {/* Footer */}
      <section className="bg-gray-900 text-white py-12">

        <div className="text-center">

          <h2 className="text-3xl font-bold">
            JobPortal
          </h2>

          <p className="mt-4 text-gray-400">
            Empowering careers. Connecting talent with opportunity.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © 2026 JobPortal. All rights reserved.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;