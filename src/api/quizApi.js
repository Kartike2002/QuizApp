const quizData = {
  html: [{ question: "HTML stands for?", option_a:"Hyper Text Markup Language", option_b:"High Text Machine Language", option_c:"Hyperlinks Text Mark Language", option_d:"None", correct_answer:"A" }],

  css: [{ question: "CSS stands for?", option_a:"Creative Style System", option_b:"Cascading Style Sheets", option_c:"Computer Style Sheet", option_d:"None", correct_answer:"B" }],

  cpp: [{ question: "Who created C++?", option_a:"Dennis Ritchie", option_b:"Bjarne Stroustrup", option_c:"James Gosling", option_d:"Guido van Rossum", correct_answer:"B" }],

  javascript: [{ question: "JavaScript is ___ language?", option_a:"Compiled", option_b:"Interpreted", option_c:"Assembly", option_d:"Machine", correct_answer:"B" }],

  react: [{ question: "React is a ___?", option_a:"Framework", option_b:"Library", option_c:"Language", option_d:"Database", correct_answer:"B" }],

  python: [{ question: "Python is ___ typed?", option_a:"Strongly", option_b:"Statically", option_c:"Dynamically", option_d:"None", correct_answer:"C" }],

  dsa: [{ question: "Stack follows which principle?", option_a:"FIFO", option_b:"LIFO", option_c:"FILO", option_d:"LILO", correct_answer:"B" }],

  node: [{ question: "Node.js is built on?", option_a:"Java", option_b:"V8 Engine", option_c:"Python", option_d:"PHP", correct_answer:"B" }],

  ml: [{ question: "ML stands for?", option_a:"Machine Learning", option_b:"Manual Learning", option_c:"Meta Logic", option_d:"None", correct_answer:"A" }],
};

export function getQuizByTopic(topic) {
  return Promise.resolve(quizData[topic] || []);
}
