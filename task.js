// ✅ Standard quiz questions
const questions = [
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
  { q: "Who is known as the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates"], answer: "Charles Babbage" },
  { q: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Program"], answer: "HyperText Transfer Protocol" },
  { q: "Solve: If 3x = 18, what is the value of x?", options: ["3", "6", "9"], answer: "6" },
  { q: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], answer: "Pacific Ocean" }
];

let currentUser = {};

// ✅ Registration with Validation
function registerUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = parseInt(document.getElementById("age").value);
  let error = document.getElementById("error");

  try {
    if (!name || !email || !age) throw "⚠️ All fields are required!";
    if (age < 12) throw "⚠️ Age must be at least 12!";

    currentUser = { name, email, age };

    document.getElementById("registerSection").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");

    loadQuiz();
  } catch (err) {
    error.innerText = err;
  }
}

// ✅ Load 3 Random Questions
function loadQuiz() {
  let quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = "";
  let selected = questions.sort(() => 0.5 - Math.random()).slice(0, 3);

  selected.forEach((q, i) => {
    let html = `
      <div class="question">
        <h3>Q${i+1}. ${q.q}</h3>
    `;
    q.options.forEach(opt => {
      html += `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label>
      `;
    });
    html += "</div>";
    quizForm.innerHTML += html;
  });

  currentUser.quiz = selected;
}

// ✅ Submit Quiz with Loader (Promise delay)
function submitQuiz() {
  let answers = [];
  currentUser.quiz.forEach((q, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    answers.push(selected ? selected.value : null);
  });

  document.getElementById("quizMsg").innerText = "⏳ Calculating result...";
  document.getElementById("loader").classList.remove("hidden");

  new Promise((resolve) => {
    setTimeout(() => resolve(answers), 2500); // simulate 2.5 sec delay
  }).then(answers => {
    calculateResult(answers);
  });
}

// ✅ Calculate Result
function calculateResult(answers) {
  let correct = 0;
  answers.forEach((ans, i) => {
    if (ans === currentUser.quiz[i].answer) correct++;
  });

  let percentage = (correct / currentUser.quiz.length) * 100;
  let grade = "D";
  if (percentage >= 80) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";

  let timestamp = new Date().toLocaleString();

  let resultData = { ...currentUser, score: correct, percentage, grade, timestamp };

  // Show Results
  document.getElementById("quizSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("loader").classList.add("hidden");

  document.getElementById("score").innerText = correct;
  document.getElementById("percentage").innerText = percentage.toFixed(2);
  document.getElementById("grade").innerText = grade;
  document.getElementById("timestamp").innerText = timestamp;
  document.getElementById("jsonData").innerText = JSON.stringify(resultData, null, 2);
}

// ✅ Restart
function restart() {
  location.reload();
}
