import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const [form, setForm] = useState({
    topic: "",
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_answer: "A",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch ALL topics and ALL questions
  const fetchQuestions = async () => {
    try {
      const url = selectedTopic
        ? `http://127.0.0.1:8000/api/quiz/questions/?topic=${selectedTopic}`
        : `http://127.0.0.1:8000/api/quiz/questions/`;

      const res = await axios.get(url);
      setQuestions(res.data);

      // Auto-extract unique topics
      const topicList = [...new Set(res.data.map((q) => q.topic))];
      setTopics(topicList);

    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [selectedTopic]);

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(
          `http://127.0.0.1:8000/api/quiz/questions/update/${editingId}/`,
          form
        );
        setEditingId(null);
      } else {
        await axios.post("http://127.0.0.1:8000/api/quiz/questions/create/", form);
      }

      // Reset form
      setForm({
        topic: "",
        question: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        correct_answer: "A",
      });

      fetchQuestions();

    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  // Delete Question
  const deleteQuestion = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/quiz/questions/delete/${id}/`
      );
      fetchQuestions();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // Edit
  const startEdit = (q) => {
    setEditingId(q.id);
    setForm({
      topic: q.topic,
      question: q.question,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      correct_answer: q.correct_answer,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10">

      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
        Manage Quiz Questions
      </h1>

      {/* Topic Filter */}
      <div className="max-w-4xl mx-auto mb-6">
        <label className="font-semibold text-gray-700 dark:text-gray-300">
          Filter by Topic
        </label>
        <select
          className="w-full p-3 border rounded bg-white"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          {topics.map((topic, i) => (
            <option key={i} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Question Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-12 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {editingId ? "Update Question" : "Add New Question"}
        </h2>

        {/* Topic */}
        <label className="font-semibold">Topic</label>
        <input
          type="text"
          className="w-full p-3 border rounded mb-4 bg-white"
          placeholder="e.g., Python, HTML, JavaScript"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          required
        />

        {/* Question */}
        <label className="font-semibold">Question</label>
        <textarea
          className="w-full p-3 border rounded mb-4 bg-white"
          placeholder="Enter the quiz question"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          required
        />

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Option A</label>
            <input
              className="w-full p-3 border rounded mb-4 bg-white"
              value={form.option_a}
              onChange={(e) => setForm({ ...form, option_a: e.target.value })}
              required
            />
          </div>

          <div>
            <label>Option B</label>
            <input
              className="w-full p-3 border rounded mb-4 bg-white"
              value={form.option_b}
              onChange={(e) => setForm({ ...form, option_b: e.target.value })}
              required
            />
          </div>

          <div>
            <label>Option C</label>
            <input
              className="w-full p-3 border rounded mb-4 bg-white"
              value={form.option_c}
              onChange={(e) => setForm({ ...form, option_c: e.target.value })}
              required
            />
          </div>

          <div>
            <label>Option D</label>
            <input
              className="w-full p-3 border rounded mb-4 bg-white"
              value={form.option_d}
              onChange={(e) => setForm({ ...form, option_d: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Correct Answer */}
        <label className="font-semibold">Correct Answer</label>
        <select
          className="w-full p-3 border rounded mb-6 bg-white"
          value={form.correct_answer}
          onChange={(e) => setForm({ ...form, correct_answer: e.target.value })}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition"
        >
          <PlusCircle size={20} />
          {editingId ? "Save Changes" : "Add Question"}
        </button>
      </form>

      {/* Questions Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <tr>
              <th className="p-3">Topic</th>
              <th className="p-3">Question</th>
              <th className="p-3">Correct</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {questions.map((q) => (
              <tr key={q.id} className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-3">{q.topic}</td>
                <td className="p-3">{q.question}</td>
                <td className="p-3 font-bold">{q.correct_answer}</td>
                <td className="p-3 flex gap-3">
                  <button
                    onClick={() => startEdit(q)}
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    <Pencil size={20} />
                  </button>

                  <button
                    onClick={() => deleteQuestion(q.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
