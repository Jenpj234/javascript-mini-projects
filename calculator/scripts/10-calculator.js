
      let calculation = JSON.parse(localStorage.getItem("calculation")) || "";

      displayCalculation = document.querySelector(".js-display-calculation");

      displayCalculation.innerHTML = calculation;

      function updateCalculation(value) {
        calculation += value;
        console.log(`${calculation}`);
        localStorage.setItem("calculation", JSON.stringify(calculation));
        displayCalculation.innerHTML = `${calculation}`;
      }