import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext , useState } from "react";
import AuthContext from "../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo/careernest-logo.png";

function Login() {

  const navigate = useNavigate();

      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm();

      const [showPassword, setShowPassword] = useState(false);

      const { login } = useContext(AuthContext);

      const onSubmit = async (data) => {
          try {
            const response = await loginUser(data);

            login(response.user, response.token);

            toast.success(response.message);

            // Redirect based on role
            if (response.user.role === "recruiter") {
              navigate("/recruiter/dashboard");
            } else if (response.user.role === "jobseeker") {
              navigate("/jobseeker/dashboard");
            } else {
              navigate("/");
            }
          } catch (error) {
            toast.error(
              error.response?.data?.message || "Login failed"
            );
          }
        };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <div className="mb-8">
            <img
              src={logo}
              alt="CareerNest"
              className="h-80 w-auto"
            />
          </div>

          <h2 className="text-4xl font-bold leading-tight">
              Welcome Back!
            </h2>

            <p className="mt-6 text-blue-100 leading-7">
              Sign in to CareerNest and continue your journey toward your dream career.
            </p>
        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-3xl font-bold mb-8">
            Sign In
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

            <div>
                <label className="font-medium">Password</label>

                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
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
              </div>

            <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

                <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;