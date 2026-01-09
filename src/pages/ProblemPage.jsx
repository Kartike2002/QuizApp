// src/pages/ProblemPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

export default function ProblemPage() {
  const { slug } = useParams();

  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("// Write your solution here...");
  const [output, setOutput] = useState("");

  // Dummy static data for UI preview
  const dummyProblem = {
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target...",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
  };

  useEffect(() => {
    setProblem(dummyProblem);
  }, [slug]);

  const handleRun = () => {
    setOutput("Running your code...\n(This is UI only right now)");
  };

  const handleSubmit = () => {
    setOutput("Submitted!\n(All test cases pending backend later)");
  };

  if (!problem) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 animate-fadeIn">
      {/* Problem Header */}
      <h1 className="text-3xl font-extrabold text-gray-900">{problem.title}</h1>

      <p className="text-gray-700 mt-4 mb-6 leading-relaxed">{problem.description}</p>

      {/* Examples */}
      <div className="mb-6 space-y-4">
        <h2 className="text-xl font-bold">Examples</h2>
        {problem.examples.map((ex, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg text-sm">
            <p><strong>Input:</strong> {ex.input}</p>
            <p><strong>Output:</strong> {ex.output}</p>
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="mb-4 border rounded-lg overflow-hidden">
        <Editor
          height="350px"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleRun}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Run Code
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit Code
        </button>
      </div>

      {/* Output Console */}
      <div className="bg-black text-green-400 p-4 rounded-lg font-mono whitespace-pre-wrap">
        {output || "/* Output will appear here */"}
      </div>
    </div>
  );
}
