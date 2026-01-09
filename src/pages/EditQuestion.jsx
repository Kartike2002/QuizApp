import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditQuestion() {
  const { id } = useParams();
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/questions/${id}/`)
      .then(res => setQuestionData(res.data));
  }, []);

  const updateQuestion = async () => {
    await axios.put(`http://127.0.0.1:8000/api/questions/${id}/`, questionData);
    alert("Updated!");
  };

  if (!questionData) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Question</h1>

      <input
        className="border p-2 w-full mb-4"
        value={questionData.question}
        onChange={e => setQuestionData({ ...questionData, question: e.target.value })}
      />

      {questionData.options.map((op, i) => (
        <input
          key={i}
          className="border p-2 w-full mb-2"
          value={op}
          onChange={e => {
            const arr = [...questionData.options];
            arr[i] = e.target.value;
            setQuestionData({ ...questionData, options: arr });
          }}
        />
      ))}

      <input
        className="border p-2 w-full mb-4"
        value={questionData.correct_answer}
        onChange={e => setQuestionData({ ...questionData, correct_answer: e.target.value })}
      />

      <button onClick={updateQuestion} className="p-2 bg-blue-500 text-white rounded">
        Update
      </button>
    </div>
  );
}
