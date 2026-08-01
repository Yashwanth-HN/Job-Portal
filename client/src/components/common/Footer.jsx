import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import logo from "../../assets/logo/careernest-horizontal.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <img
            src={logo}
            alt="CareerNest"
            className="h-14 w-auto"
          />

          <p className="mt-5 leading-7">
            CareerNest connects talented professionals
            with top companies, making hiring simple,
            secure, and efficient.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/jobs"
                className="hover:text-blue-400 transition"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/companies"
                className="hover:text-blue-400 transition"
              >
                Companies
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition"
              >
                About
              </Link>
            </li>

          </ul>

        </div>

        

        {/* Social */}

        <div>

          <h3 className="text-white text-lg font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <a href="#">
              <FaFacebook className="hover:text-blue-500 hover:scale-110 transition duration-300" />
            </a>

            <a href="#">
              <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition duration-300" />
            </a>

            <a href="#">
              <FaGithub className="hover:text-white hover:scale-110 transition duration-300" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">

        © {new Date().getFullYear()} CareerNest. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;