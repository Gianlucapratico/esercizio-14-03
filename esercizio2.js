// Controlla se il sessionStorage ha un valore "start-time"
if (sessionStorage.getItem("start-time")) {
  // Calcola il tempo trascorso dal "start-time" e aggiorna il contatore
  let startTime = new Date(sessionStorage.getItem("start-time")).getTime();
  let now = new Date().getTime();
  let elapsedSeconds = Math.floor((now - startTime) / 1000);
  document.getElementById("counter").innerText = elapsedSeconds;
}

// Inizia il contatore e salva il "start-time" nel sessionStorage
function startCounter() {
  let startTime = new Date().toString();
  sessionStorage.setItem("start-time", startTime);
  let counter = document.getElementById("counter");
  let elapsedSeconds = 0;
  setInterval(function () {
    elapsedSeconds++;
    counter.innerText = elapsedSeconds;
  }, 1000);
}

// Cancella il "start-time" dal sessionStorage e resetta il contatore
function resetCounter() {
  sessionStorage.removeItem("start-time");
  document.getElementById("counter").innerText = "0";
}
