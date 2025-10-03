let student = {};
const questions = [
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
  { q: "Who is known as the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates"], answer: "Charles Babbage" },
  { q: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol"], answer: "HyperText Transfer Protocol" }
];

function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  if (!name || !email || !age) { alert("Fill all fields!"); return; }

  student = { name, email, age };
  document.getElementById("registerSection").style.display = "none";
  document.getElementById("quizSection").style.display = "block";

  document.getElementById("quizForm").innerHTML = `
    <p>${questions[0].q}<br>
     <label><input type="radio" name="q0" value="Earth"> Earth<br></label>
      <label><input type="radio" name="q0" value="Mars"> Mars<br></label>
      <label><input type="radio" name="q0" value="Jupiter"> Jupiter<br></label>
    </p>
    <p>${questions[1].q}<br>
      <label><input type="radio" name="q1" value="Charles Babbage"> Charles Babbage<br></label>
      <label><input type="radio" name="q1" value="Alan Turing"> Alan Turing<br></label>
      <label><input type="radio" name="q1" value="Bill Gates"> Bill Gates<br></label>
    </p>
    <p>${questions[2].q}<br>
      <label><input type="radio" name="q2" value="HyperText Transfer Protocol"> HyperText Transfer Protocol<br></label>
      <label><input type="radio" name="q2" value="HighText Transfer Protocol"> HighText Transfer Protocol<br></label>
      <label><input type="radio" name="q2" value="HyperText Transmission Protocol"> HyperText Transmission Protocol<br></label>
    </p>
  `;
}

function submitQuiz() {
  let score = 0;
  const ans0 = document.querySelector('input[name="q0"]:checked')?.value;
  const ans1 = document.querySelector('input[name="q1"]:checked')?.value;
  const ans2 = document.querySelector('input[name="q2"]:checked')?.value;

  if (ans0 === questions[0].answer) score++;
  if (ans1 === questions[1].answer) score++;
  if (ans2 === questions[2].answer) score++;

  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultSection").style.display = "block";

  document.getElementById("result").innerText = `Hi ${student.name}, your score: ${score}/3`;
  document.getElementById("jsonData").innerText = JSON.stringify({
    student,
    answers: { Q1: ans0, Q2: ans1, Q3: ans2 }
  }, null, 2);
}
letstudent()