const form = document.getElementsByTagName("form")[0];
const nameInput = document.getElementById("name");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const containerSavedName = document.getElementsByClassName("previousName");
const previousButton = document.getElementById("previous");
const nameInputValue = nameInput.value;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nameInput.value);
  localStorage.setItem("nameInput", nameInput.value);
  form.reset();
});

cancelButton.addEventListener("click", function () {
  const savedName = localStorage.getItem("nameInput", nameInput.value);
  if (savedName) {
    localStorage.removeItem("nameInput");
  } else {
    alert("Non è presente alcun dato");
  }
});
previousButton.addEventListener("click", function () {
  const savedName = localStorage.getItem("nameInput", nameInput.value);
  if (savedName) {
    containerSavedName[0].innerText = savedName;
  } else {
    containerSavedName[0].innerText = "Nessun nome precedente";
  }
});

// timer

const viaButton = document.getElementById("via");
const stopButton = document.getElementById("stop");
const aside = document.getElementById("aside");
let seconds = sessionStorage.getItem("seconds") || 0;

const countdown = setInterval(function () {
  seconds++;
  aside.innerText = seconds;

  sessionStorage.setItem("seconds", seconds);
}, 1000);
