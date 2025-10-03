const questions = [
  { q: "Who is known as the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates"], answer: "Charles Babbage" },
  { q: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Program"], answer: "HyperText Transfer Protocol" },
  { q: "Solve: If 3x = 18, what is the value of x?", options: ["3", "6", "9"], answer: "6" },
  { q: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], answer: "Pacific Ocean" }
];

let currentUser = {};

function registerUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = parseInt(document.getElementById("age").value);
  let error = document.getElementById("error");

  if (!name || !email || !age) {
    error.innerText = "All fields are required!";
    return;
  }
  if (age < 12) {
    error.innerText = "Age must be at least 12!";
    return;
  }

  currentUser = { name, email, age };

  document.getElementById("registerSection").classList.add("hidden");
  document.getElementById("quizSection").classList.remove("hidden");

  loadQuiz();
}

function loadQuiz() {
  let quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = "";

  questions.forEach((q, i) => {
    let html = `
      <div class="question">
        <h3>Q${i + 1}. ${q.q}</h3>
    `;
    q.options.forEach(opt => {
      html += `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label><br>
      `;
    });
    html += "</div>";
    quizForm.innerHTML += html;
  });
}

function submitQuiz() {
  let answers = [];
  questions.forEach((q, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    answers.push(selected ? selected.value : null);
  });

  document.getElementById("quizMsg").innerText = "⏳ Calculating result...";
  document.getElementById("loader").classList.remove("hidden");

  new Promise((resolve) => {
    setTimeout(() => resolve(answers), 2500); 
  }).then(answers => {
    calculateResult(answers);
  });
}

function calculateResult(answers) {
  let correct = 0;
  answers.forEach((ans, i) => {
    if (ans === questions[i].answer) correct++;
  });

  let percentage = (correct / questions.length) * 100;
  let grade = "D";
  if (percentage >= 80) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";

  let timestamp = new Date().toLocaleString();

  let resultData = { ...currentUser, score: correct, percentage, grade, timestamp };

  document.getElementById("quizSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("loader").classList.add("hidden");

  document.getElementById("score").innerText = correct;
  document.getElementById("percentage").innerText = percentage.toFixed(2);
  document.getElementById("grade").innerText = grade;
  document.getElementById("timestamp").innerText = timestamp;
  document.getElementById("jsonData").innerText = JSON.stringify(resultData, null, 2);
}

function restart() {
  location.reload();
}
