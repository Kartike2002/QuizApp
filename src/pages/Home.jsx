import { Link, useNavigate } from "react-router-dom";
import { Brain, Code, Trophy } from "lucide-react";
import React from "react";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");  // quiz dashboard route
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-6 md:px-12 transition-colors duration-300">

      {/* Hero Section */}
      <section className="text-center mt-16 md:mt-24 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Welcome{user ? `, ${user.username}` : ""}
          </span>{" "}
          <span className="text-gray-800 dark:text-white">to CodeBrainey</span> 💡
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
          Your{" "}
          <span className="font-semibold text-blue-500">
            AI-powered coding mentor
          </span>{" "}
          for mastering DSA, quizzes, and coding interviews.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          {/* IF USER IS NOT LOGGED IN */}
          {!user && (
            <Link
              to="/signup"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium hover:opacity-90 shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          )}

          {/* IF USER IS LOGGED IN */}
          {user && (
            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </section>

      {/* Feature Section */}
      <section className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          {
            title: "Smart Coding Practice",
            desc: "Solve curated problems with AI feedback and hints when you're stuck.",
            icon: <Code size={32} />,
            gradient: "from-blue-500 to-indigo-500",
          },
          {
            title: "AI Mentor Guidance",
            desc: "Chat with your personalized AI mentor to understand concepts and revise DSA topics.",
            icon: <Brain size={32} />,
            gradient: "from-indigo-500 to-purple-500",
          },
          {
            title: "Placement-Focused Quizzes",
            desc: "Attempt topic-wise quizzes, track your progress, and climb the leaderboard.",
            icon: <Trophy size={32} />,
            gradient: "from-purple-500 to-pink-500",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-transparent hover:border-blue-400"
          >
            <div
              className={`flex items-center justify-center bg-gradient-to-r ${card.gradient} text-white rounded-full w-16 h-16 mx-auto mb-4 shadow-lg`}
            >
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 dark:text-gray-400 text-sm text-center pb-8">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-blue-500">CodeBrainey AI</span> — Built
        with 💙 by Aditya Nigam
      </footer>
    </div>
  );
}
