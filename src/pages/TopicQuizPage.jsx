import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QUIZ_QUESTIONS } from "../Data/quizQuestions";

/* Utility to shuffle */
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function TopicQuizPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  /* Load 10 random questions */
  useEffect(() => {
    const topicKey = topic.toLowerCase(); // 🔥 FIX
    const topicQuestions = QUIZ_QUESTIONS[topicKey];

    if (!topicQuestions || topicQuestions.length < 10) {
      setQuestions([]);
      return;
    }

    setQuestions(shuffleArray(topicQuestions).slice(0, 10));
  }, [topic]);

  /* If no questions */
  if (questions.length === 0) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Quiz not available ❌
      </div>
    );
  }

  const current = questions[index];

  const nextQuestion = () => {
    if (selected === current.ans) {
      setScore((prev) => prev + 1);
    }

    setSelected(null);

    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  /* Result Screen */
  if (finished) {
    return (
      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow text-center text-gray-900">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h1>
        <p className="text-xl mb-6">
          Your Score: <b>{score}</b> / {questions.length}
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Back to Quiz Dashboard
        </button>
      </div>
    );
  }

  /* Quiz UI */
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow text-gray-900">
      <h2 className="text-xl font-bold mb-4">
        Question {index + 1} / {questions.length}
      </h2>

      <p className="mb-6 text-lg font-medium">{current.q}</p>

      <div className="space-y-3">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full text-left px-4 py-3 rounded border transition
              ${
                selected === i
                  ? "bg-blue-100 border-blue-500"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-300"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={nextQuestion}
        disabled={selected === null}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded
          disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {index === questions.length - 1 ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}
