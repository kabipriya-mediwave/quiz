let questions = [
  {
    id: 1,
    question:
      "1.A computer assisted method for the recording and analyzing of existing or hypothetical systems is?",
    options: [
      "Data transmission",
      "Data flow",
      "Data capture",
      "Data processing",
      "None of the above",
    ],
    answer: "Data flow",
  },
  {
    id: 2,
    question: "2.The brain of any computer system is?",
    options: ["ALU", "Memory", "CPU", "Control unit", "None of the above"],
    answer: "CPU",
  },
  {
    id: 3,
    question:
      "3.Which of the following computer language is used for artificial intelligence?",
    options: ["FORTRAN", "PROLOG", "C", "COBOL", "None of the above"],
    answer: "PROLOG",
  },
  {
    id: 4,
    question:
      "4.Which of the following bus types are used by the Apple Macintosh computer?",
    options: ["ISA", "NuBus", "EISA", "MCA", "PCI Bus"],
    answer: "NuBus",
  },
];
function makeQuizeDiv(quiz) {
  const div = document.createElement("div");
  div.setAttribute("id", `question-${quiz["id"]}`);
  div.setAttribute("class", "quiz-app");

  const h2 = document.createElement("h2");
  h2.innerText = quiz["question"];

  const subDiv = document.createElement("div");
  subDiv.setAttribute("class", "subdiv");

  for (let i = 0; i < quiz.options.length; i++) {
    const label = document.createElement("label");

    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("class", "radioBtn");
    radio.setAttribute("name", `dot-${quiz["id"]}`);
    radio.value = quiz.options[i];

    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i]));
    subDiv.appendChild(label);
  }

  div.appendChild(h2);
  div.appendChild(subDiv);

  return div;
}
function appendToApp(quizDiv) {
  const app = document.querySelector("#app");
  app.appendChild(quizDiv);
}
function updateQuizListUI() {
  for (let i = 0; i < questions.length; i++) {
    const quizDiv = makeQuizeDiv(questions[i]);
    appendToApp(quizDiv);
  }
}
function add() {
  const quiz = {
    id: new Date().getTime(),
    question: ques,
    options: ops,
    isEdit: false,
  };
  clear();
}
updateQuizListUI();
function goBack() {
  window.history.back();
}
