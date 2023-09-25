const appdiv = document.querySelector("#app");
appdiv.style.display = "none";

const category = [
  { id: 123, name: "Computer Science", value: "computer" },
  { id: 456, name: "Current Affairs", value: "current_affairs" },
];
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  let selectedValue = categorySelect.value;
  console.log(selectedValue);
  // window.location.href = `index.html?type=${selectedValue}`;
  appdiv.style.display = "block";
  quizdiv.style.display = "none";
  updateQuizListUI(selectedValue);
});
for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}

const computer = [
  {
    id: 1,
    question: " 1.In which decade was the Internet first implemented?",
    options: [
      { id: 10, text: "(A)1960s", isCorrect: true },
      { id: 20, text: "(B)1950s", isCorrect: false },
      { id: 30, text: "(c)1980's", isCorrect: false },
    ],
    category: 123,
  },
  {
    id: 2,
    question: "2.Where are the contents of your computer's hard drive indexed?",
    options: [
      { id: 40, text: "(A) Yahoo!", isCorrect: false },
      { id: 50, text: "(B) Google", isCorrect: false },
      { id: 60, text: "(D) None of the above", isCorrect: true },
    ],
    category: 123,
  },
  {
    id: 3,
    question: "3.ISP stands for:",
    options: [
      { id: 70, text: "(A) Internet Survey Period", isCorrect: true },
      { id: 80, text: "(B)Internet Service Provider", isCorrect: true },
      { id: 90, text: "(c)Integrated Service Provider", isCorrect: false },
    ],
    category: 123,
  },
  {
    id: 4,
    question: "4.Internet Explorer is a:",
    options: [
      { id: 21, text: "(A)Web Browser", isCorrect: true },
      { id: 22, text: "(B)News Reader", isCorrect: false },
      { id: 23, text: "(c)Graphing Package", isCorrect: false },
    ],
    category: 123,
  },
  {
    id: 5,
    question:
      "1.Which institution is to house India’s first technology business incubation centre based on green technology? ",
    options: [
      { id: 24, text: "(A)NIT Srinagar", isCorrect: true },
      { id: 25, text: "(B)News Reader", isCorrect: false },
      { id: 26, text: "(c)Graphing Package", isCorrect: false },
    ],
    category: 456,
  },
  {
    id: 6,
    question:
      "2.Who is the head of the ‘Parliamentary committee on official languages’? ",
    options: [
      { id: 24, text: "(A) Rajnath Singh", isCorrect: false },
      { id: 25, text: "(B)Amit Shah", isCorrect: true },
      { id: 26, text: "(c)Piyush Goyal", isCorrect: false },
    ],
    category: 456,
  },
];

const questionCollection = {
  computer: computer,
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
        resDiv.innerHTML = "Sorry,correct answer is " + quiz.answer;
        resDiv.style.color = "red";
      }
    } else {
      resDiv.innerHTML = "Please select an option.";
      resDiv.style.color = "yellow";
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
    label.appendChild(document.createTextNode(quiz.options[i]["text"]));
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

  saveToLocalStorage();
}
function updateQuizListUI(sub) {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  for (let i = 0; i < questionCollection[sub].length; i++) {
    const quizDiv = makeQuizDiv(questionCollection[sub][i]);
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
function saveToLocalStorage() {
  const str = JSON.stringify(questionCollection);
  localStorage.setItem("quiz", str);
}
