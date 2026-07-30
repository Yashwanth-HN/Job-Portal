import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



function Register() {
    const navigate = useNavigate();

const {
  register,
  handleSubmit,
  watch,
  formState: { errors, isSubmitting },
} = useForm();
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const onSubmit = async (data) => {
  try {
    const response = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });

    toast.success(response.message);

    navigate("/login");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration failed"
    );
  }
};



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-4xl" />
            <h1 className="text-3xl font-bold">JobPortal</h1>
          </div>

          <h2 className="text-4xl font-bold">
            Join Our Community
          </h2>

          <p className="mt-6 text-blue-100">
            Create an account and connect with top companies and exciting opportunities.
          </p>
        </div>

        {/* Right */}
        <div className="p-10">

          <h2 className="text-3xl font-bold mb-8">
            Create Account
          </h2>

          <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
           <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}


            <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
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

            <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border rounded-xl px-4 py-3 pr-12"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border rounded-xl px-4 py-3 pr-12"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}

            <select
              className="w-full border rounded-xl px-4 py-3"
              defaultValue=""
              {...register("role", {
                required: "Please select a role",
              })}
            >
              <option value="" disabled>
                Select Role
              </option>

              <option value="jobseeker">
                Job Seeker
              </option>

              <option value="recruiter">
                Recruiter
              </option>
            </select>

            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="mt-8 text-center">
            Already have an account?{" "}
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

export default Register;