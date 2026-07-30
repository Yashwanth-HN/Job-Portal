import { FaBriefcase } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/authService";

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
            Forgot Password?
          </h2>

          <p className="mt-6 text-blue-100">
            Enter your registered email address.
            We'll send you a password reset link.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold mb-8">
            Reset Password
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            <div>

              <label className="font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting
                ? "Sending..."
                : "Send Reset Link"}
            </button>

          </form>

          <p className="text-center mt-8">

            Remember your password?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold"
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