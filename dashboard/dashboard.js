let student = { name: "", birthYear: 0, city: "" };

  // 1. Save Profile
  function saveProfile() {
    let n = document.getElementById("name").value;
    let y = document.getElementById("birthYear").value;
    let c = document.getElementById("city").value;

    if (n == "" || y == "" || c == "") {
      document.getElementById("profileOutput").innerText = "Please fill all fields!";
      return;
    }

    student.name = n;
    student.birthYear = parseInt(y);
    student.city = c;

    document.getElementById("profileOutput").innerText = 
      "Hello " + student.name + " from " + student.city;
  }

  // 2. Check Age
  function checkAge() {
    if (student.birthYear == 0) {
      document.getElementById("ageOutput").innerText = "Enter your profile first!";
      return;
    }
    let age = new Date().getFullYear() - student.birthYear;
    let eligible = (age >= 18) ? "Eligible (18+)" : "Not Eligible (<18)";
    document.getElementById("ageOutput").innerText = "Age: " + age + " → " + eligible;
  }

  // 3. Greeting
  function showGreeting() {
    let hour = new Date().getHours();
    let greet;
    if (hour < 12) greet = "Good Morning";
    else if (hour < 18) greet = "Good Afternoon";
    else greet = "Good Evening";

    document.getElementById("greetOutput").innerText = greet + " " + student.name;
  }

  // 4. Calculator
  function calculate(op) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
      document.getElementById("calcOutput").innerText = "Enter valid numbers!";
      return;
    }

    let result;
    if (op == "+") result = n1 + n2;
    if (op == "-") result = n1 - n2;
    if (op == "*") result = n1 * n2;
    if (op == "/") {
      if (n2 == 0) {
        document.getElementById("calcOutput").innerText = "Cannot divide by 0!";
        return;
      }
      result = n1 / n2;
    }

    document.getElementById("calcOutput").innerText = "Result: " + result;
  }

  // 5. Motivational Quotes
  function showQuote() {
    let quotes = [
      "Believe in yourself!",
      "Work hard, dream big!",
      "Keep going!",
      "Stay positive!"
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("quoteOutput").innerText = quote;
  }

  // 6. Show JSON Info
  function showJSON() {
    document.getElementById("jsonOutput").innerText = JSON.stringify(student, null, 2);
  }