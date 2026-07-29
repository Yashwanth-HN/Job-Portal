import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white">
            JobPortal
          </h2>

          <p className="mt-4">
            Connecting talented professionals with top companies.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Jobs</li>
            <li>Companies</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Resources
          </h3>

          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>

          <h3 className="text-white font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook />

            <FaInstagram />

            <FaLinkedin />

            <FaGithub />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 JobPortal. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;