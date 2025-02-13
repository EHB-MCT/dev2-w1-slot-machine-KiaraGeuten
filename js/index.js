import { slotMachine } from "./slotMachine.js";
let win = false;
function init() {
  console.log("Init");
  // TODO: log the document using console.log to test if you can get access to it -> check
  // TODO: log the submit button. If that works, store that button in a variable
  const Pull = document.querySelector("#button");
  // TODO: attach an event listener to that button and show a log "button clicked"
  // TODO: if the submit button is clicked, the lever is pulled (= call that function)
  Pull.addEventListener("click", function () {
    pullLever();
  });
}

function pullLever() {
  // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
  // TODO: spin the slot machine
  slotMachine.spin();
  // TODO: show slots and win status
  showSlots();
  slotMachine.win;
  slotMachine.reset();
}

function showSlots() {
  // TODO: show the slot symbols in HTML
  let slots = "";
  for (let i = 0; i < slotMachine.slots.length; i++) {
    slots +=
      '<span class="' +
      slotMachine.slots[i] +
      '">' +
      slotMachine.slots[i] +
      "</span>";
  }
  document.querySelector("#result").innerHTML = slots;
}

function showGameResult() {
  // TODO: show a win or lose message in HTML
  if (win) {
    document.querySelector("#status").innerHTML = "<p>You Win</p>";
  }
  if (!win) {
    document.querySelector("#status").innerHTML = "<p>You lose</p>";
  }
}

init();
