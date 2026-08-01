import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/authService";
import logo from "../../assets/logo/careernest-logo.png";

import {
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await forgotPassword(data);

      toast.success(response.message);

      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
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
            Forgot Your Password?
          </h1>

          <p className="mt-8 text-blue-100 text-xl leading-9 max-w-md">
            Don't worry! Enter your registered email
            address and we'll send you a secure password
            reset link to help you regain access to your
            CareerNest account.
          </p>

          {/* Decorative Plane */}

          <div className="absolute bottom-10 right-10 opacity-20 rotate-12">

            <FaPaperPlane className="text-[90px]" />

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="p-14 flex flex-col justify-center">

          <h2 className="text-5xl font-bold mb-12">
            Forgot Password
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            <div>

              <label className="block font-semibold mb-3 text-lg">
                Email
              </label>

              <div className="relative">

                <FaEnvelope
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
                />

                <input
                  type="email"
                  placeholder="Enter your registered email"
                  className="w-full border-2 rounded-2xl pl-14 pr-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />

              </div>

              {errors.email && (
                <p className="text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 transition disabled:opacity-50"
            >
              <FaPaperPlane />

              {isSubmitting
                ? "Sending..."
                : "Send Reset Link"}

            </button>

          </form>

          <p className="text-center text-lg mt-12">

            Remember your password?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;