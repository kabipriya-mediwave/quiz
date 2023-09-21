const category = [
  {
    name: "Computer Science",
    value: "Computer_Science",
  },
  {
    name: "current affairs",
    value: "current affairs",
  },
];
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var selectedValue = categorySelect.value;
  window.location.href = `computer_science.html?type=${selectedValue}`;
});

for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;

  categorySelect.appendChild(option);
}
