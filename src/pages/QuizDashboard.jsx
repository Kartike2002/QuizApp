import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizDashboard() {
  const navigate = useNavigate();

  const quizData = {
    basic: [
      {
        id: 1,
        name: "HTML",
        level: "Basic",
        questions: 10,
        completed: 60,
        color: "from-orange-400 to-orange-600",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      },
      {
        id: 2,
        name: "CSS",
        level: "Basic",
        questions: 12,
        completed: 40,
        color: "from-blue-400 to-blue-600",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      },
      {
        id: 3,
        name: "C++",
        level: "Basic",
        questions: 14,
        completed: 10,
        color: "from-sky-400 to-sky-700",
        icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      },
    ],

    intermediate: [
      {
        id: 4,
        name: "JavaScript",
        level: "Intermediate",
        questions: 15,
        completed: 20,
        color: "from-yellow-300 to-yellow-500",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        id: 5,
        name: "React",
        level: "Intermediate",
        questions: 12,
        completed: 30,
        color: "from-cyan-400 to-cyan-600",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      },
      {
        id: 6,
        name: "Python",
        level: "Intermediate",
        questions: 20,
        completed: 25,
        color: "from-blue-500 to-blue-800",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
      },
    ],

    advanced: [
      {
        id: 7,
        name: "Data Structures (DSA)",
        level: "Advanced",
        questions: 20,
        completed: 5,
        color: "from-red-500 to-red-700",
        icon: "https://cdn-icons-png.flaticon.com/512/4144/4144505.png",
      },
      {
        id: 8,
        name: "Node.js",
        level: "Advanced",
        questions: 18,
        completed: 12,
        color: "from-green-500 to-green-700",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      },
      {
        id: 9,
        name: "Machine Learning",
        level: "Advanced",
        questions: 25,
        completed: 3,
        color: "from-purple-500 to-purple-700",
        icon: "https://cdn-icons-png.flaticon.com/512/4144/4144564.png",
      },
    ],
  };

  // ✅ FIXED START QUIZ FUNCTION
  const startQuiz = (topicName) => {
    const topicMap = {
      HTML: "html",
      CSS: "css",
      "C++": "cpp",

      JavaScript: "javascript",
      React: "react",
      Python: "python",

      "Data Structures (DSA)": "dsa",
      "Node.js": "node",
      "Machine Learning": "ml",
    };

    const topic = topicMap[topicName];

    if (!topic) {
      alert("Quiz not available yet");
      return;
    }

    navigate(`/quiz/topic/${topic}`);
  };

  const QuizCard = ({ topic }) => (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl">
      <div
        className={`w-24 h-24 rounded-full bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 shadow-md`}
      >
        <img
          src={topic.icon}
          alt={topic.name}
          className="w-14 h-14 drop-shadow-md"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-900 tracking-wide">
        {topic.name}
      </h2>

      <span className="text-sm bg-green-100 text-green-600 px-4 py-1 rounded-full mt-2 font-medium">
        {topic.level}
      </span>

      <p className="mt-3 text-gray-600 text-sm">
        {topic.questions} Questions
      </p>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-4 overflow-hidden">
        <div
          className="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
          style={{ width: `${topic.completed}%` }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-1">
        {topic.completed}% Completed
      </p>

      <button
        onClick={() => startQuiz(topic.name)}
        className="mt-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-6 rounded-lg shadow-md"
      >
        Start Quiz
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D1B2A] p-6">
      <h1 className="text-white text-4xl font-extrabold mb-8">
        Choose Your Quiz
      </h1>

      {/* BASIC */}
      <h2 className="text-white text-2xl font-semibold mb-4">Basic</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {quizData.basic.map((topic) => (
          <QuizCard key={topic.id} topic={topic} />
        ))}
      </div>

      {/* INTERMEDIATE */}
      <h2 className="text-white text-2xl font-semibold mb-4">Intermediate</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {quizData.intermediate.map((topic) => (
          <QuizCard key={topic.id} topic={topic} />
        ))}
      </div>

      {/* ADVANCED */}
      <h2 className="text-white text-2xl font-semibold mb-4">Advanced</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizData.advanced.map((topic) => (
          <QuizCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
