import React from "react";
import { Link, useParams } from "react-router-dom";

/* STATIC PRACTICE DATA (NO BACKEND) */
const PRACTICE_DATA = {
  arrays: [
    {
      title: "Find Maximum Element",
      difficulty: "Easy",
      slug: "find-max",
    },
    {
      title: "Reverse an Array",
      difficulty: "Easy",
      slug: "reverse-array",
    },
    {
      title: "Kadane's Algorithm",
      difficulty: "Medium",
      slug: "kadane",
    },
  ],

  strings: [
    {
      title: "Check Palindrome",
      difficulty: "Easy",
      slug: "palindrome",
    },
    {
      title: "Longest Common Prefix",
      difficulty: "Medium",
      slug: "lcp",
    },
  ],

  linkedlist: [
    {
      title: "Reverse Linked List",
      difficulty: "Easy",
      slug: "reverse-ll",
    },
  ],
};

export default function CategoryPage() {
  const { name } = useParams();
  const problems = PRACTICE_DATA[name] || [];

  if (problems.length === 0) {
    return (
      <div className="p-6 text-xl text-red-500">
        No problems available for this category.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {name} Problems
      </h1>

      <div className="space-y-4">
        {problems.map((problem) => (
          <Link
            key={problem.slug}
            to={`/coding-practice/problem/${problem.slug}`}
            className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              {problem.title}
            </h2>
            <p className="text-sm text-gray-500">
              Difficulty: {problem.difficulty}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
