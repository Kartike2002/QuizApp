// src/pages/CodingPractice.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBook, FaChartLine, FaNetworkWired, FaProjectDiagram } from "react-icons/fa";

const sections = {
  Basic: [
    { id: "arrays", title: "Arrays", icon: <FaCode />, color: "bg-blue-100 text-blue-700" },
    { id: "strings", title: "Strings", icon: <FaCode />, color: "bg-purple-100 text-purple-700" },
    { id: "linked-list", title: "Linked List", icon: <FaBook />, color: "bg-green-100 text-green-700" },
    { id: "stack-queue", title: "Stack & Queue", icon: <FaBook />, color: "bg-orange-100 text-orange-700" },
    { id: "hashmap", title: "HashMap / Hashing", icon: <FaCode />, color: "bg-teal-100 text-teal-700" },
  ],

  Intermediate: [
    { id: "binary-search", title: "Binary Search", icon: <FaChartLine />, color: "bg-indigo-100 text-indigo-700" },
    { id: "sliding-window", title: "Sliding Window", icon: <FaChartLine />, color: "bg-pink-100 text-pink-700" },
    { id: "two-pointers", title: "Two Pointers", icon: <FaProjectDiagram />, color: "bg-emerald-100 text-emerald-700" },
    { id: "recursion", title: "Recursion", icon: <FaBook />, color: "bg-yellow-100 text-yellow-700" },
    { id: "backtracking", title: "Backtracking", icon: <FaNetworkWired />, color: "bg-red-100 text-red-600" },
  ],

  Advanced: [
    { id: "trees", title: "Trees", icon: <FaProjectDiagram />, color: "bg-blue-200 text-blue-800" },
    { id: "graphs", title: "Graphs", icon: <FaNetworkWired />, color: "bg-purple-200 text-purple-800" },
    { id: "dp", title: "Dynamic Programming", icon: <FaBook />, color: "bg-green-200 text-green-800" },
    { id: "tries", title: "Tries", icon: <FaCode />, color: "bg-rose-200 text-rose-800" },
    { id: "heaps", title: "Heaps / Priority Queue", icon: <FaCode />, color: "bg-orange-200 text-orange-800" },
  ],
};

export default function CodingPractice() {
  return (
    <div className="p-8 animate-fadeIn">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-100">Coding Practice</h1>
      <p className="text-gray-400 mb-8">Sharpen your DSA skills with structured topic-wise practice.</p>

      {Object.entries(sections).map(([name, items]) => (
        <div key={name} className="mb-12">
          
          {/* Section Title */}
          <h2 className="text-2xl font-extrabold mb-4 text-white tracking-wide">
            {name}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link to={`/coding-practice/category/${item.id}`} key={item.id}>
                <div
                  className={`${item.color} p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer`}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>

                  <h3 className="text-xl font-extrabold text-gray-900">{item.title}</h3>

                  <p className="text-gray-700 mt-2">Practice {item.title} problems.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
