import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaBriefcase, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}

        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">

          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-4xl" />
            <h1 className="text-3xl font-bold">
              JobPortal
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Reset Password
          </h2>

          <p className="mt-6 text-blue-100">
            Create a strong new password to secure your account.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold mb-8">
            Create New Password
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Password */}

            <div>

              <label className="font-medium">
                New Password
              </label>

              <div className="relative mt-2">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="font-medium">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm new password"
                  className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
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