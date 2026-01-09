import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../utils/leaderboardUtils";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getLeaderboard());
  }, []);

  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No leaderboard data yet
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center">🏆 Leaderboard</h1>

      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Rank</th>
            <th className="p-2">User</th>
            <th className="p-2">Topic</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={item.id ?? i} className="text-center border-t">
              <td className="p-2 font-bold">{i + 1}</td>
              <td className="p-2">{item.username}</td>
              <td className="p-2">{item.topic}</td>
              <td className="p-2 font-semibold">
                {item.score}
                {item.total ? ` / ${item.total}` : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
