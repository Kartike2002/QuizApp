import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const topic = localStorage.getItem("selectedTopic") || "";

  // -----------------------------
  // Load & Generate Questions
  // -----------------------------
  useEffect(() => {
    if (!topic) {
      setError("No topic selected. Please choose a topic first.");
      setLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      setLoading(true);

      try {
        // 1️⃣ Try loading saved questions from DB
        const res = await axios.get(
          `http://127.0.0.1:8000/api/quiz/questions/?topic=${encodeURIComponent(
            topic
          )}`
        );

        if (res.data.length > 0) {
          loadFormattedQuestions(res.data);
          setLoading(false);
          return;
        }

        // 2️⃣ If no DB questions → Generate using Gemini
        const ai = await axios.get(
          `http://127.0.0.1:8000/api/quiz/generate/?topic=${encodeURIComponent(
            topic
          )}`
        );

        if (ai.data.questions) {
          loadFormattedQuestions(ai.data.questions);
        } else {
          setError("AI could not generate questions.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load or generate questions.");
      }

      setLoading(false);
    };

    fetchQuestions();
  }, [topic]);

  // -----------------------------
  // Format Questions Helper
  // -----------------------------
  const loadFormattedQuestions = (arr) => {
    const formatted = arr.map((q) => {
      const correctText =
        q[`option_${q.correct_answer?.toLowerCase()}`] ||
        q.options?.[q.correct_answer];

      return {
        ...q,
        options: [
          `A. ${q.option_a || q.options?.A}`,
          `B. ${q.option_b || q.options?.B}`,
          `C. ${q.option_c || q.options?.C}`,
          `D. ${q.option_d || q.options?.D}`,
        ],
        correctOption: `${q.correct_answer}. ${correctText}`,
      };
    });

    setQuestions(formatted);
  };

  // -----------------------------
  // Select Option
  // -----------------------------
  const selectOption = (qIndex, option) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  // -----------------------------
  // Score Calculation
  // -----------------------------
  const calculateScore = () => {
    let sc = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correctOption) sc++;
    });
    return sc;
  };

  const submitQuiz = () => {
    const sc = calculateScore();
    setScore(sc);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  // -----------------------------
  // Option Styling
  // -----------------------------
  const getOptionStyle = (q, qIndex, option) => {
    const isSelected = selectedAnswers[qIndex] === option;
    const isCorrect = option === q.correctOption;

    if (!submitted) {
      return "flex items-center gap-2 p-3 bg-white text-gray-900 border rounded cursor-pointer hover:bg-gray-100";
    }

    if (isCorrect) {
      return "flex items-center gap-2 p-3 bg-green-100 border-l-4 border-green-500 rounded";
    }

    if (isSelected && !isCorrect) {
      return "flex items-center gap-2 p-3 bg-red-100 border-l-4 border-red-500 rounded";
    }

    return "flex items-center gap-2 p-3 bg-white text-gray-900 opacity-70 rounded";
  };

  // -----------------------------
  // Loading & Error UI
  // -----------------------------
  if (loading)
    return <div className="text-center p-10 text-lg">Loading questions...</div>;

  if (error)
    return <div className="text-red-500 p-6 text-center text-lg">{error}</div>;

  // -----------------------------
  // Quiz UI
  // -----------------------------
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Topic: {topic}</h2>

      {questions.map((q, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 shadow mb-6 border border-gray-200"
        >
          <div className="text-lg font-semibold text-gray-900 mb-4">
            {idx + 1}. {q.question}
          </div>

          <div className="space-y-3">
            {q.options.map((option, i) => (
              <label key={i} className={getOptionStyle(q, idx, option)}>
                <input
                  type="radio"
                  name={`q-${idx}`}
                  value={option}
                  checked={selectedAnswers[idx] === option}
                  disabled={submitted}
                  onChange={() => selectOption(idx, option)}
                />
                <span className="text-gray-900 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={submitQuiz}
          disabled={submitted}
          className={`px-6 py-3 rounded-lg text-white text-lg ${
            submitted ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Submit Quiz
        </button>

        <button
          onClick={resetQuiz}
          className="px-6 py-3 rounded-lg border border-gray-300 text-lg bg-white hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {/* Score */}
      {score !== null && (
        <div className="mt-6 text-2xl font-bold text-gray-900">
          Your Score: {score} / {questions.length}
        </div>
      )}
    </div>
  );
}
