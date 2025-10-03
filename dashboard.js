let student = { name: "", birthYear: null, city: "" };

    function showSection(id) {
      document.querySelectorAll(".card").forEach(card => card.classList.add("hidden"));
      document.getElementById(id).classList.remove("hidden");
    }

    function saveProfile() {
      let name = document.getElementById("name").value.trim();
      let birthYear = parseInt(document.getElementById("birthYear").value);
      let city = document.getElementById("city").value.trim();

      if (!name || !birthYear || !city) {
        document.getElementById("profileOutput").innerText = "Fill all fields!";
        return;
      }

      student = { name, birthYear, city };
      document.getElementById("profileOutput").innerText =
        "Profile Saved!\n" + JSON.stringify(student, null, 2);
    }

    function checkAge() {
      if (!student.birthYear) {
        document.getElementById("ageOutput").innerText = "Save profile first!";
        return;
      }
      let age = new Date().getFullYear() - student.birthYear;
      let eligible = age >= 18 ? "Eligible (18+)" : "Not Eligible (under 18)";
      document.getElementById("ageOutput").innerText = 
        `${student.name} is ${age} years old.\n${eligible}`;
    }

    function showGreeting() {
      if (!student.name) {
        document.getElementById("greetingOutput").innerText = "Save profile first!";
        return;
      }
      let hour = new Date().getHours();
      let greet = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
      document.getElementById("greetingOutput").innerText = 
        `${greet}, ${student.name} from ${student.city}!`;
    }


    function calculate(op) {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcOutput").innerText = "Enter valid numbers!";
        return;
      }
      let result;
      switch(op) {
        case 'add': result = num1 + num2; break;
        case 'sub': result = num1 - num2; break;
        case 'mul': result = num1 * num2; break;
        case 'div': result = num2 === 0 ? "Division by 0!" : num1 / num2; break;
      }
      document.getElementById("calcOutput").innerText = "Result: " + result;
    }

    function showQuote() {
      let quotes = [
        "Believe in yourself!",
        "Keep pushing forward!",
        "Dreams don’t work unless you do.",
        "Success is earned, not given.",
        "Small steps make big changes."
      ];
      let random = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteOutput").innerText = quotes[random];
    }