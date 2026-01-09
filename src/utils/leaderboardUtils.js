const KEY = "leaderboard";

/* Save score */
export const saveScore = (username, topic, score, total) => {
  const oldData = JSON.parse(localStorage.getItem(KEY)) || [];

  const newEntry = {
    id: Date.now(),                 // unique id
    username,
    topic,
    score,
    total,
    date: new Date().toLocaleString(),
  };

  oldData.push(newEntry);

  localStorage.setItem(KEY, JSON.stringify(oldData));
};

/* Get leaderboard (sorted) */
export const getLeaderboard = () => {
  const data = JSON.parse(localStorage.getItem(KEY)) || [];
  return data.sort((a, b) => b.score - a.score);
};
