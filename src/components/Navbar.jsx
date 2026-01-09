import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, Brain } from "lucide-react";



export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.full_name || "User";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // ✅ Load theme from localStorage on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 px-6 py-3 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* 🧠 Brand Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <Brain className="w-7 h-7 text-purple-600 dark:text-indigo-400" />
          <span className="text-2xl font-extrabold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent tracking-tight">
            CodeBrainey
          </span>
        </Link>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium">
          {[
            ["Home", "/home"],
            ["Quiz", "/quiz"],
            ["Leaderboard", "/leaderboard"],
            ["Mentor Chat", "/mentor-chat"],
            ["Coding Practice", "/coding-practice"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="hover:text-purple-600 dark:hover:text-indigo-400 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* 🌙 Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* 👤 Profile Menu (Desktop) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-purple-700 dark:text-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold border-2 border-white overflow-hidden">
                {user?.profile_image ? (
                  <img
                    src={user.profile_image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{userInitial}</span>
                )}
              </div>
              <span className="font-semibold">{userName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transform transition-transform ${
                  showProfileMenu ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-purple-700 dark:text-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Link
                  to="/profile"
                  onClick={() => setShowProfileMenu(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  👤 Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-purple-600 dark:text-gray-100 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
          {[
            ["Home", "/home"],
            ["Quiz", "/quiz"],
            ["Leaderboard", "/leaderboard"],
            ["Mentor Chat", "/mentor-chat"],
            ["Coding Practice", "/coding-practice"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:bg-purple-100 dark:hover:bg-gray-700 px-3 py-2 rounded transition"
            >
              {label}
            </Link>
          ))}

          <hr className="border-gray-300 my-2 dark:border-gray-600" />

          <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold overflow-hidden">
              {user?.profile_image ? (
                <img
                  src={user.profile_image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                userInitial
              )}
            </div>
            <div>
              <p className="font-semibold">{userName}</p>
              <button
                onClick={handleLogout}
                className="text-sm text-purple-700 dark:text-gray-300 hover:text-purple-900 dark:hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
