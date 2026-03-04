/*
Name: Your Name
File Name: script.js
Date: 2026
*/

/* Hamburger menu function */
function menu() {
  var x = document.getElementById("nav-links");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* FAQ Answer Functions */

function ans1() {
  document.getElementById("answer").innerHTML =
    "Wild Rescues helps injured and orphaned wildlife recover and return safely to the wild.";
}

function ans2() {
  document.getElementById("answer").innerHTML =
    "You can volunteer, donate, or partner with our organization to support wildlife care.";
}

function ans3() {
  document.getElementById("answer").innerHTML =
    "If you find injured wildlife, contact us immediately at (555) 123-4567.";
}

function ans4() {
  document.getElementById("answer").innerHTML =
    "All animals are rehabilitated by trained volunteers and wildlife professionals.";
}
