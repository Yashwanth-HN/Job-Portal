import { Link } from "react-router-dom";
import { FaSearch, FaCheckCircle, FaBuilding } from "react-icons/fa";
import logo from "../../assets/logo/careernest-horizontal.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Background Blur Effects */}

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <img
              src={logo}
              alt="CareerNest"
              className="h-16 mb-8"
            />

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
              🚀 Build Your Career, One Opportunity at a Time
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">

              Find Your

              <br />

              <span className="text-blue-600">
                Dream Career
              </span>

              <br />

              With CareerNest

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Discover thousands of verified job opportunities,
              connect with leading companies, and build the
              career you've always dreamed of—all in one place.
            </p>

            {/* Search */}

            <div className="mt-10 bg-white rounded-2xl shadow-xl p-3 flex flex-col sm:flex-row gap-3">

              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                className="flex-1 px-5 py-4 rounded-xl outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition">

                <FaSearch />

                Find Jobs

              </button>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/jobs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition font-semibold"
              >
                Explore Jobs
              </Link>

              <Link
                to="/register"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition font-semibold"
              >
                Join CareerNest
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Floating Badge */}

            <div className="absolute -top-6 right-0 bg-white shadow-xl rounded-2xl p-5 z-10">

              <div className="flex items-center gap-3">

                <FaBuilding className="text-blue-600 text-2xl" />

                <div>

                  <p className="text-sm text-gray-500">
                    Trusted By
                  </p>

                  <h4 className="font-bold text-lg">
                    2,500+ Companies
                  </h4>

                </div>

              </div>

            </div>

            {/* Main Card */}

            <div className="bg-white rounded-3xl shadow-2xl p-10">

              <h3 className="text-3xl font-bold mb-10 text-center">
                CareerNest Statistics
              </h3>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-blue-50 rounded-2xl p-6 text-center">

                  <h2 className="text-4xl font-bold text-blue-600">
                    10K+
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Jobs
                  </p>

                </div>

                <div className="bg-indigo-50 rounded-2xl p-6 text-center">

                  <h2 className="text-4xl font-bold text-indigo-600">
                    2.5K+
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Companies
                  </p>

                </div>

                <div className="bg-green-50 rounded-2xl p-6 text-center">

                  <h2 className="text-4xl font-bold text-green-600">
                    50K+
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Users
                  </p>

                </div>

                <div className="bg-yellow-50 rounded-2xl p-6 text-center">

                  <h2 className="text-4xl font-bold text-yellow-600">
                    15K+
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Hires
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Verified Badge */}

            <div className="absolute -bottom-6 left-0 bg-white shadow-xl rounded-2xl px-6 py-4">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600 text-2xl" />

                <div>

                  <h4 className="font-bold">
                    100% Verified Jobs
                  </h4>

                  <p className="text-sm text-gray-500">
                    Trusted Recruiters
                  </p>

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