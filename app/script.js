const state = {
  categories: [
    {
      id: 1,
      name: "Computer Science",
      value: "computer",
    },
    {
      id: 2,
      name: "biology",
      value: "bio",
    },
  ],
  questions: [
    {
      id: 220,
      question: "1.In which decade was the Internet first implemented?",
      options: [
        { id: 10, text: "(A)1960s", isCorrect: true },
        { id: 20, text: "(B)1970s", isCorrect: false },
        { id: 30, text: "(C)1980s", isCorrect: false },
        { id: 40, text: "(D)1990s", isCorrect: false },
      ],
      category: 1,
    },
    {
      id: 230,
      question:
        "2.Where are the contents of your computer's hard drive indexed?",
      options: [
        { id: 50, text: "(A)yahoo", isCorrect: false },
        { id: 60, text: "(b)google", isCorrect: false },
        { id: 70, text: "(c)None of the above", isCorrect: true },
        { id: 80, text: "(d)browser", isCorrect: false },
      ],
      category: 1,
    },
    {
      id: 240,
      question: "3.ISP stands for",
      options: [
        { id: 50, text: "A)Internet Service Provider", isCorrect: true },
        { id: 51, text: "B) Internet Survey Period", isCorrect: false },
        { id: 52, text: "(c)Integrated Service Provider", isCorrect: false },
        { id: 53, text: "(D)Integrated survey provider", isCorrect: false },
      ],
      category: 1,
    },
    {
      id: "250",
      question: "Ozone hole refers to ",
      options: [
        { id: 54, text: "hole in ozone layer", isCorrect: false },
        {
          id: 55,
          text: "decrease in thickness of ozone layer in stratosphere",
          isCorrect: true,
        },
        {
          id: 56,
          text: "increase in the thickness of ozone layer in troposphere",
          isCorrect: false,
        },
        {
          id: 57,
          text: "decrease in the ozone layer in troposphere",
          isCorrect: false,
        },
      ],
      category: 2,
    },
    {
      id: "260",
      question: "Plants receive their nutrients mainly from ",
      options: [
        { id: 59, text: "chlorophyll", isCorrect: false },
        { id: 60, text: "atmosphere ", isCorrect: false },
        { id: 61, text: "soil", isCorrect: true },
        { id: 52, text: "grass", isCorrect: true },
      ],
      category: 2,
    },
    {
      id: "270",
      question: "Pollination is best defined as",
      options: [
        { id: 55, text: "germination of pollen grains", isCorrect: false },
        { id: 56, text: "visiting flowers by insects", isCorrect: false },
        {
          id: 57,
          text: "transfer of pollen from anther to stigma",
          isCorrect: true,
        },
        { id: 58, text: "growth of pollen tube in ovule", isCorrect: false },
      ],
      category: 2,
    },
  ],
};
const appdiv = document.querySelector("#app");
appdiv.style.display = "none";
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  let selectedValue = categorySelect.value;
  console.log(selectedValue);
  appdiv.style.display = "block";
  quizdiv.style.display = "none";
  updateQuizListUI(selectedValue);
});
for (let sub of state.categories) {
  const option = document.createElement("option");
  option.value = sub.id;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}
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
      const userAnswer = selectedOption.value;
      const answerIndex = quiz["options"].findIndex(
        (item) => item.text === userAnswer
      );
      const correctAnswer = quiz.options.find((option) => option.isCorrect);
      if (quiz["options"][answerIndex].isCorrect) {
        resDiv.innerHTML = "Correct Answer!";
        resDiv.style.color = "green";
      } else {
        resDiv.innerHTML = " correct answer is " + correctAnswer.text;
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
    radio.value = quiz.options[i].text;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i].text));
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
function updateQuizListUI(sub) {
  quizForm.style.display = "none";
  appdiv.style.display = "block";
  setCategoryInStorage(sub);
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const filteredQuestions = state.questions.filter((q) => q.category == sub);
  for (let i = 0; i < filteredQuestions.length; i++) {
    const quizDiv = makeQuizDiv(filteredQuestions[i]);
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
  setCategoryInStorage("");
}
function setCategoryInStorage(categoryId) {
  localStorage.setItem("selected_category", categoryId);
}
function getCategoryFromStorage(categoryId) {
  return localStorage.getItem("selected_category");
}

function checkIfCategoryIsSaved() {
  const storedCategory = getCategoryFromStorage();
  if (storedCategory) {
    updateQuizListUI(storedCategory);
  }
}
checkIfCategoryIsSaved();
