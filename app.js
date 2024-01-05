// Code from: https://openjavascript.info/2021/10/18/how-to-build-a-javascript-calculator/

// Clicking an input fires the input function
document.getElementById("0").addEventListener("click", input);
document.getElementById("1").addEventListener("click", input);
document.getElementById("2").addEventListener("click", input);
document.getElementById("3").addEventListener("click", input);
document.getElementById("4").addEventListener("click", input);
document.getElementById("5").addEventListener("click", input);
document.getElementById("6").addEventListener("click", input);
document.getElementById("7").addEventListener("click", input);
document.getElementById("8").addEventListener("click", input);
document.getElementById("9").addEventListener("click", input);
document.getElementById("+").addEventListener("click", input);
document.getElementById("-").addEventListener("click", input);
document.getElementById("*").addEventListener("click", input);
document.getElementById("/").addEventListener("click", input);
document.getElementById(".").addEventListener("click", input);

// Keyboard input
document.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    calculate();
  } else if (e.code == "Backspace") {
    del();
  } else if (e.code == "Delete") {
    reset();
  } else {
    input(e);
  }
});

// Equals fires the calculate function
document.getElementById("=").addEventListener("click", calculate);

// AC fires the reset function
document.getElementById("AC").addEventListener("click", reset);

// DEL fires the del function
document.getElementById("DEL").addEventListener("click", del);

// Get display element as constant
const display = document.getElementById("display-text");

// Set current display to empty string
let displayCurrent = "";

function input(e) {
  // initialize inputValue
  let inputValue = "";

  // If click (1), set inputValue as previously
  if (e.type == "click") {
    inputValue = e.target.innerText;
  }

  // Otherwise set input by key pressed
  else {
    if (e.key == "0") {
      inputValue = "0";
    } else if (e.key == "1") {
      inputValue = "1";
    } else if (e.key == "2") {
      inputValue = "2";
    } else if (e.key == "3") {
      inputValue = "3";
    } else if (e.key == "4") {
      inputValue = "4";
    } else if (e.key == "5") {
      inputValue = "5";
    } else if (e.key == "6") {
      inputValue = "6";
    } else if (e.key == "7") {
      inputValue = "7";
    } else if (e.key == "8") {
      inputValue = "8";
    } else if (e.key == "9") {
      inputValue = "9";
    } else if (e.key == "+") {
      inputValue = "+";
    } else if (e.key == "-") {
      inputValue = "-";
    } else if (e.key == "*") {
      inputValue = "*";
    } else if (e.key == "/") {
      inputValue = "/";
    }
  }

  // Check if previous and current input are symbols
  if (
    (displayCurrent.substr(-1) == "*" ||
      displayCurrent.substr(-1) == "/" ||
      displayCurrent.substr(-1) == "-" ||
      displayCurrent.substr(-1) == "+") &&
    (inputValue == "*" ||
      inputValue == "/" ||
      inputValue == "-" ||
      inputValue == "+")
  ) {
    // If yes, remove last symbol and add new one
    displayCurrent = displayCurrent.slice(0, -1) + inputValue;
  } else {
    // Otherwise, append input value as normal
    displayCurrent += inputValue;
  }

  // Print display current
  display.innerText = numberWithCommas(displayCurrent);
}

function calculate() {
  display.innerText = numberWithCommas(eval(displayCurrent));
  displayCurrent = eval(displayCurrent).toString();
}

function reset() {
  displayCurrent = "";
  display.innerText = numberWithCommas(displayCurrent);
}

function del() {
  displayCurrent = displayCurrent.substring(0, displayCurrent.length - 1);
  display.innerText = numberWithCommas(displayCurrent);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
