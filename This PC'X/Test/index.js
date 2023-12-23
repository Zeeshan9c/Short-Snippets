var tagDropdown = document.getElementById("tag-dropdown");
var heading = document.getElementById("heading");

tagDropdown.addEventListener("change", function () {
  var newTag = document.createElement(tagDropdown.value);
  newTag.innerHTML = heading.innerHTML;
  heading.parentNode.replaceChild(newTag, heading);
  heading = newTag;
});

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let timerRunning = false;
const display = document.getElementById("display");

function start() {
  if (!timerRunning) {
    timerRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function stop() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  let milliseconds = Math.floor(elapsedTime % 1000);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / 60000) % 60);
  let hours = Math.floor((elapsedTime / 3600000) % 24);
  let displayString =
    pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 1);
  display.textContent = displayString;
}

function pad(number, length) {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}