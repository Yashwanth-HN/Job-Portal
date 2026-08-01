import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUserPlus,
} from "react-icons/fa";

function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Career Starts Here
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Ready to Build
            <br />
            Your Dream Career?
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            Join thousands of professionals and recruiters using
            CareerNest to discover opportunities, hire top talent,
            and achieve career success.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 transition"
            >
              Explore Jobs

              <FaArrowRight />
            </Link>

            <Link
              to="/register"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-3 transition"
            >
              Create Account

              <FaUserPlus />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;