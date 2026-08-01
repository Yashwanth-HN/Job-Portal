import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaKey,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";
import logo from "../../assets/logo/careernest-logo.png";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await resetPassword(token, {
        password,
      });

      toast.success(response.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT PANEL */}

        <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white p-14 flex flex-col justify-center">

          <img
            src={logo}
            alt="CareerNest"
            className="h-50 w-auto mb-12"
          />

          <h1 className="text-5xl font-bold leading-tight">
            Create a New Password
          </h1>

          <p className="mt-8 text-blue-100 text-xl leading-9 max-w-md">
            Choose a strong password to secure your
            CareerNest account. Make sure it's easy
            for you to remember and difficult for
            others to guess.
          </p>

          {/* Decorative Paper Plane */}

          <div className="absolute bottom-10 right-10 opacity-20 rotate-12">
            <FaPaperPlane className="text-[90px]" />
          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="p-14 flex flex-col justify-center">

          <h2 className="text-5xl font-bold mb-12">
            Reset Password
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Password */}

            <div>

              <label className="block font-semibold mb-3 text-lg">
                New Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="Enter new password"
                  className="w-full border-2 rounded-2xl pl-14 pr-14 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="block font-semibold mb-3 text-lg">
                Confirm Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm new password"
                  className="w-full border-2 rounded-2xl pl-14 pr-14 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaKey />

              {loading
                ? "Updating..."
                : "Reset Password"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ResetPassword;