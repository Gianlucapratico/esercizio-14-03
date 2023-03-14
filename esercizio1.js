const nameInput = document.getElementById("name");
const savedName = document.getElementById("saved-name");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");

// Mostra il valore precedentemente salvato, se presente
if (localStorage.getItem("name")) {
  savedName.innerText = "Nome salvato: " + localStorage.getItem("name");
}

// Salva il valore nel localStorage quando si clicca sul pulsante "Salva"
saveButton.addEventListener("click", function () {
  localStorage.setItem("name", nameInput.value);
  savedName.innerText = "Nome salvato: " + nameInput.value;
});

// Cancella il valore dal localStorage quando si clicca sul pulsante "Cancella"
clearButton.addEventListener("click", function () {
  localStorage.removeItem("name");
  savedName.innerText = "";
  nameInput.value = "";
});
