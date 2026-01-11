import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CODING_QUESTIONS } from "../Data/codingQuestions";

const LANG_TEMPLATES = {
  python: `def solution(input):
    pass`,
  c: `#include <stdio.h>

int main() {
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}`,
  java: `class Main {
    public static void main(String[] args) {

    }
}`
};

export default function ProblemPage() {
  const { slug } = useParams();

  // Find problem by ID
  const problem = Object.values(CODING_QUESTIONS)
    .flat()
    .find((q) => q.id.toString() === slug);

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(LANG_TEMPLATES.python);
  const [result, setResult] = useState(null);

  if (!problem) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Problem not found ❌
      </div>
    );
  }

  /* DEMO MODE CHECK */
  const runCode = () => {
    // This is demo logic (no real compiler)
    // Assume first test case is correct if code is not empty
    if (code.trim().length > 10) {
      setResult("✅ All test cases passed");
    } else {
      setResult("❌ Wrong Answer");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

      {/* LEFT: PROBLEM */}
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-extrabold text-black mb-3">
          {problem.title}
        </h1>

        <p className="text-black font-medium mb-6">
          {problem.description}
        </p>

        <h3 className="font-bold text-black mb-2">Example Test Case</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm text-black">
Input: {JSON.stringify(problem.testCases[0].input)}
{"\n"}
Output: {JSON.stringify(problem.testCases[0].output)}
        </pre>
      </div>

      {/* RIGHT: CODE EDITOR */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col">

        {/* LANGUAGE SELECT */}
        <div className="flex gap-3 mb-4">
          {["python", "c", "cpp", "java"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setCode(LANG_TEMPLATES[lang]);
              }}
              className={`px-4 py-1 rounded font-semibold ${
                language === lang
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CODE AREA */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 border rounded p-3 font-mono text-sm text-black focus:outline-none"
        />

        {/* RUN BUTTON */}
        <button
          onClick={runCode}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
        >
          Run Code
        </button>

        {/* RESULT */}
        {result && (
          <div className="mt-4 font-bold text-lg">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
