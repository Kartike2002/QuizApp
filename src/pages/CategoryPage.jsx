import React from "react";
import { Link, useParams } from "react-router-dom";
import { CODING_QUESTIONS } from "../Data/codingQuestions";

export default function CategoryPage() {
  const { name } = useParams();
  const problems = CODING_QUESTIONS[name] || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-extrabold text-white mb-8 capitalize">
        {name} Problems
      </h1>

      {/* PROBLEM LIST */}
      <div className="space-y-5">
        {problems.map((q, index) => (
          <Link
            key={q.id}
            to={`/coding-practice/problem/${q.id}`}
            className="block"
          >
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
              
              {/* QUESTION TITLE */}
              <h2 className="text-lg font-bold text-black mb-2">
                {index + 1}. {q.title}
              </h2>

              {/* QUESTION DESCRIPTION */}
              <p className="text-black font-medium">
                {q.description}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
