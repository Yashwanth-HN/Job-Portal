import { useContext, useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUserTag,
  FaEdit,
  FaSave,
} from "react-icons/fa";
import {
  getProfile,
  updateProfile,
} from "../../services/authService";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

function Profile() {
  const [user, setUser] = useState(null);
  const { updateUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      setUser(data.user);

      setFormData({
        name: data.user.name,
        email: data.user.email,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const data = await updateProfile(formData);

      toast.success(data.message);

      setUser(data.user);

      updateUser(data.user);

      setIsEditing(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Profile update failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-lg text-gray-600">
          Loading Profile...
        </p>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl mb-10">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}

          <div className="w-28 h-28 rounded-full bg-white text-blue-700 flex items-center justify-center text-5xl font-bold shadow-lg">

            {user.name.charAt(0).toUpperCase()}

          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {user.name}
            </h1>

            <p className="text-blue-100 text-lg mt-3">
              Manage your CareerNest profile and keep your
              information updated for recruiters.
            </p>

          </div>

        </div>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-8">
          Profile Information
        </h2>

        <div className="space-y-8">

          {/* Name */}

          <div>

            <label className="flex items-center gap-3 font-semibold mb-3">

              <FaUser className="text-blue-600" />

              Full Name

            </label>

            {isEditing ? (

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            ) : (

              <p className="text-xl">
                {user.name}
              </p>

            )}

          </div>

          {/* Email */}

          <div>

            <label className="flex items-center gap-3 font-semibold mb-3">

              <FaEnvelope className="text-green-600" />

              Email Address

            </label>

            {isEditing ? (

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            ) : (

              <p className="text-xl">
                {user.email}
              </p>

            )}

          </div>

          {/* Role */}

          <div>

            <label className="flex items-center gap-3 font-semibold mb-3">

              <FaUserTag className="text-purple-600" />

              Role

            </label>

            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full capitalize font-semibold">
              {user.role}
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10">

          {isEditing ? (

            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-3 transition"
            >
              <FaSave />

              Save Changes

            </button>

          ) : (

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-3 transition"
            >
              <FaEdit />

              Edit Profile

            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;