import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, go to quiz dashboard
  useEffect(() => {
    const user = localStorage.getItem("registeredUser");
    if (user) {
      navigate("/quiz");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const storedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      setLoading(false);
      return;
    }

    if (
      email !== storedUser.email ||
      password !== storedUser.password
    ) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    // Login success
    localStorage.setItem("loggedInUser", storedUser.email);

    setLoading(false);
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-100 dark:bg-gray-900 px-4">

      <div className="bg-white dark:bg-gray-800
                      shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-extrabold text-center mb-6
                       text-gray-900 dark:text-gray-100">
          Welcome Back 👋
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700
                          dark:bg-red-900 dark:text-red-200
                          p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium
                               text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border
                         bg-white text-gray-900
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium
                               text-gray-800 dark:text-gray-200">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-lg border
                         bg-white text-gray-900
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9
                         text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-bold transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4
                      text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
