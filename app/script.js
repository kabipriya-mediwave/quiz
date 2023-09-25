const category = [
  {
    name: "Computer Science",
    value: "Computer_Science",
  },
  {
    name: "Current Affairs",
    value: "current_Affairs",
  },
];

const appdiv = document.querySelector("#app");
appdiv.style.display = "none";

const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  var selectedValue = categorySelect.value;
  // window.location.href = `index.html?type=${selectedValue}`;
  appdiv.style.display = "block";
  quizdiv.style.display = "none";
});
for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}

const Computer_Science = [
  {
    id: 1,
    question: " 1.In which decade was the Internet first implemented?",
    options: ["(A) 1940s", "(B) 1950s", "(C) 1960s", "(D) 1980s"],
    answer: "(C) 1960s",
  },
  {
    id: 2,
    question: "2.Where are the contents of your computer's hard drive indexed?",
    options: ["(A) Yahoo!", "(B) Google", "(C) MSN", "(D) None of the above"],
    answer: "(D) None of the above",
  },
  {
    id: 3,
    question: " 3.ISP stands for:",
    options: [
      "(A) Internet Survey Period",
      "(B) Integrated Service Provider",
      "(C) Internet Security Protocol",
      "(D) Internet Service Provider",
    ],
    answer: "(D) Internet Service Provider",
  },
  {
    id: 3,
    question: " 4.Internet Explorer is a:",
    options: [
      "(A) Any person browsing the net",
      "(B) Web Browser",
      "(C) Graphing Package",
      "(D) News Reader",
    ],
    answer: "(B) Web Browser",
  },
];
const current_affairs = [
  {
    id: "1",
    question:
      "1.Which institution is to house India’s first technology business incubation centre based on green technology? ",
    options: [
      " [A] IIT Madras",
      "[B] NIT Srinagar",
      "[C] IIT Roorkee",
      "[D] NIT Tiruchirappalli",
    ],
    correctAns: "[B] NIT Srinagar",
  },
  {
    id: "2",
    question:
      "2.Who is the head of the ‘Parliamentary committee on official languages’?",
    options: [
      "[A] Rajnath Singh",
      "[B] Amit Shah",
      "[C] Nitin Gadkari",
      "[D] Piyush Goyal",
    ],
    correctAns: "[B] Amit Shah",
  },
];
const questionCollection = {
  Computer_Science: Computer_Science,
  current_affairs: current_affairs,
};
// const urlParams = new URLSearchParams(window.location.search);
// const myType = urlParams.get("type");
// console.log(questionCollection[myType]);
function makeQuizDiv(quiz) {
  const div = document.createElement("div");
  div.setAttribute("id", `question-${quiz.id}`);
  div.setAttribute("class", "quiz-app");
  const h2 = document.createElement("h2");
  h2.innerText = quiz.question;
  const subDiv = document.createElement("div");
  subDiv.setAttribute("class", "subdiv");
  const resDiv = document.createElement("div");
  resDiv.setAttribute("class", "res-div");

  button.addEventListener("click", function () {
    const selectedOption = document.querySelector(
      `input[name="answer-${quiz.id}"]:checked`
    );
    if (selectedOption) {
      const selectedAnswer = selectedOption.value;
      if (selectedAnswer === quiz.answer) {
        resDiv.innerHTML = "Correct Answer!";
        resDiv.style.color = "green";
      } else {
        resDiv.innerHTML = "correct answer is " + quiz.answer;
        resDiv.style.color = "red";
      }
    } else {
      resDiv.innerHTML = "select an option.";
      resDiv.style.color = "orange";
    }
  });
  for (let i = 0; i < quiz.options.length; i++) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", `answer-${quiz.id}`);
    radio.setAttribute("class", "radioBtn");
    radio.value = quiz.options[i];
    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i]));
    subDiv.appendChild(label);
  }
  div.appendChild(h2);
  div.appendChild(subDiv);
  div.appendChild(resDiv);
  div.appendChild(button);
  div.appendChild(back);
  return div;
}
const button = document.createElement("button");
button.setAttribute("class", "btn");
button.innerHTML = "Check Answer";
function appendToApp(quizDiv) {
  const app = document.querySelector("#app");
  app.appendChild(quizDiv);
}
function updateQuizListUI() {
  for (let i = 0; i < Computer_Science.length; i++) {
    const quizDiv = makeQuizDiv(Computer_Science[i]);
    appendToApp(quizDiv);
  }
}
const back = document.createElement("button");
back.setAttribute("class", "back");
back.innerHTML = "Back";
back.addEventListener("click", goBack);
function goBack() {
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  appdiv.style.display = "none";
  quizdiv.style.display = "block";
}

updateQuizListUI();
