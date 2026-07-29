import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Your Career Starts Here
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Find Your
              <span className="text-blue-600"> Dream Job </span>
              Today.
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Connect with top companies, discover exciting opportunities,
              and build the career you've always dreamed of.
            </p>

            {/* Search Box */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <input
                type="text"
                placeholder="Search jobs..."
                className="flex-1 px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl flex items-center justify-center gap-2 transition">

                <FaSearch />

                Search

              </button>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex gap-4">

              <Link
                to="/jobs"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Explore Jobs
              </Link>

              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

              <h3 className="text-2xl font-bold mb-8">
                Platform Statistics
              </h3>

              <div className="space-y-6">

                <div className="flex justify-between">
                  <span>Jobs Available</span>
                  <span className="font-bold text-blue-600">10,000+</span>
                </div>

                <div className="flex justify-between">
                  <span>Companies</span>
                  <span className="font-bold text-blue-600">2,500+</span>
                </div>

                <div className="flex justify-between">
                  <span>Active Users</span>
                  <span className="font-bold text-blue-600">50,000+</span>
                </div>

                <div className="flex justify-between">
                  <span>Successful Hires</span>
                  <span className="font-bold text-blue-600">15,000+</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;