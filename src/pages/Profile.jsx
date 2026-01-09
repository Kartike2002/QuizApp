import React, { useState, useEffect } from "react";
import { User, Mail, Trophy, Target, LogOut, Settings, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [formData, setFormData] = useState({ full_name: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        full_name: storedUser.full_name || "",
        email: storedUser.email || "",
      });
      setPreviewImage(storedUser.profile_image || "");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    const updatedUser = {
      ...user,
      full_name: formData.full_name,
      email: formData.email,
      profile_image: previewImage,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* 👤 Profile Header */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md text-center mb-8">
          <div className="flex flex-col items-center relative">
            {/* 🖼️ Profile Image */}
            <div className="relative group">
              <img
                src={
                  previewImage ||
                  `https://api.dicebear.com/7.x/adventurer/svg?seed=${user.full_name || "User"}`
                }
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-purple-500 mb-3 object-cover"
              />
              <label
                htmlFor="profileImageUpload"
                className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full cursor-pointer shadow-md"
              >
                <Camera size={18} />
              </label>
              <input
                type="file"
                id="profileImageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {editMode ? (
              <>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="text-xl font-bold text-center bg-transparent border-b border-purple-500 focus:outline-none mb-1"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-gray-600 dark:text-gray-400 text-center bg-transparent border-b border-purple-500 focus:outline-none mb-3"
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold">{user.full_name || "User"}</h2>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center">
                  <Mail size={16} /> {user.email || "user@example.com"}
                </p>
              </>
            )}
          </div>

          {/* ✏️ Edit / Save Buttons */}
          <div className="mt-4">
            {editMode ? (
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleSaveChanges}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition"
              >
                <Settings size={18} /> Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* 🧠 Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center shadow">
            <Trophy className="mx-auto text-yellow-500 mb-2" size={28} />
            <p className="text-lg font-bold">12</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Quizzes Attempted
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center shadow">
            <Target className="mx-auto text-green-500 mb-2" size={28} />
            <p className="text-lg font-bold">87%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Accuracy Rate
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center shadow">
            <Trophy className="mx-auto text-purple-500 mb-2" size={28} />
            <p className="text-lg font-bold">920</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Best Score
            </p>
          </div>
        </div>

        {/* 🚪 Logout Button */}
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
