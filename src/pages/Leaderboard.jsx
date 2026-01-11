import React, { useEffect, useState } from "react";
import { LEADERBOARD_DATA } from "../Data/leaderboardDemo";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  // current user (demo)
  const currentUser =
    localStorage.getItem("username") || "Aditya";

  useEffect(() => {
    const sorted = [...LEADERBOARD_DATA].sort(
      (a, b) => b.score - a.score
    );
    setData(sorted);
  }, []);

  const getMedal = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        🏆 Leaderboard (Demo)
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-center">Rank</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-center">Topic</th>
              <th className="p-3 text-center">Score</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              const isCurrentUser =
                item.username === currentUser;

              return (
                <tr
                  key={index}
                  className={`
                    border-t
                    ${
                      isCurrentUser
                        ? "bg-blue-100 dark:bg-blue-900 font-bold"
                        : "bg-white dark:bg-gray-900"
                    }
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition
                  `}
                >
                  <td className="p-3 text-center text-xl">
                    {getMedal(index + 1)}
                  </td>

                  <td className="p-3">
                    {item.username}
                    {isCurrentUser && (
                      <span className="ml-2 text-sm text-blue-600">
                        (You)
                      </span>
                    )}
                  </td>

                  <td className="p-3 text-center">
                    {item.topic}
                  </td>

                  <td className="p-3 text-center text-blue-600 font-bold">
                    {item.score}/10
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
