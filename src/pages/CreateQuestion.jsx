import { useState } from "react";
import axios from "axios";

export default function CreateQuestion() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://127.0.0.1:8000/api/questions/", {
      question,
      options,
      correct_answer: correct,
      topic: "General",
    });

    alert("Question Added");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New Question</h1>

      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Question"
        onChange={(e) => setQuestion(e.target.value)}
      />

      {options.map((op, i) => (
        <input
          key={i}
          className="border p-2 w-full mb-2"
          placeholder={`Option ${i + 1}`}
          onChange={(e) => {
            const arr = [...options];
            arr[i] = e.target.value;
            setOptions(arr);
          }}
        />
      ))}

      <input
        className="border p-2 w-full mb-4"
        placeholder="Correct Answer"
        onChange={(e) => setCorrect(e.target.value)}
      />

      <button className="p-2 bg-green-600 text-white rounded" onClick={handleSubmit}>
        Save Question
      </button>
    </div>
  );
}
