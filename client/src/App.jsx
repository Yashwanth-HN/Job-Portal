import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/public/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import JobSeekerDashboard from "./pages/jobseeker/JobSeekerDashboard";
import Jobs from "./pages/public/Jobs";
import Companies from "./pages/public/Companies";
import About from "./pages/public/About";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/recruiter/dashboard"
            element={
              <ProtectedRoute role="recruiter">
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route
              path="/jobseeker/dashboard"
              element={
                <ProtectedRoute role="jobseeker">
                  <JobSeekerDashboard />
                </ProtectedRoute>
              }
            />
        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;