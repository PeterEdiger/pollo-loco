let keyboard = new Keyboard();
let pressedKey = "";
let canvas = document.getElementById(`canvas`);
let ctx = canvas.getContext("2d");
let dialog = document.querySelector(`.dialog-bg`);
let startScreen = document.querySelector(`.start-screen-container`);
let youLostScreen = document.querySelector(`.you-lost-container`);
let youWinScreen = document.querySelector(`.you-win-container`)
let audioBtnsHolder = document.querySelector(`.audio-button-holder`);


let keyCollection = {
  " ": "space",
  "ArrowUp": "up",
  "ArrowDown": "down",
  "ArrowLeft": "left",
  "ArrowRight": "right",
  "d": "d"
};


/**
 * Initializer of the game. Starts {body onload="init()"}
 * Initiates the world.
 */
function init() {
  initLevel();
  document.getElementById(`icon-sound-on`).classList.remove("d-none")
  document.getElementById(`icon-sound-off`).classList.add("d-none")
  setTimeout(() => {
    showActionBtns();
    canvas = document.getElementById(`canvas`);
    world = new World(canvas, keyboard);
    startScreen.classList.add("d-none");
    audioBtnsHolder.classList.remove("d-none");
    
  }, 50);
}


/**
 * Clears all intervals set in the game.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * Hides the dialog background.
 */
function hideDialogBg() {
  document.querySelector(`.dialog-bg`).classList.add("d-none");
}


/**
 * Hides all action buttons.
 */
function hideActionBtns() {
  let allActnBtns = document.querySelectorAll(`.action-btns`);
  allActnBtns.forEach(btn => {
    btn.classList.add(`d-none`);
  });
}


/**
 * Shows all action buttons.
 */
function showActionBtns() {
  let allActnBtns = document.querySelectorAll(`.action-btns`);
  allActnBtns.forEach(btn => {
    btn.classList.remove(`d-none`);
  });
}


/**
 * Shows the start screen.
 */
function showStartScreen() {
  hideActionBtns();
  youLostScreen.classList.add("d-none");
  youWinScreen.classList.add("d-none");
  startScreen.classList.remove(`d-none`);
}


/**
 * Shows the legal notice dialog.
 */
function showLegalNotice() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = legalNoticeTemplate();
}


/**
 * Shows the game controls dialog.
 */
function showGameControls() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = gameControlsTemplate();
}


/**
 * Shows the privacy policy dialog.
 */
function showPrivacyPolicy() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = privacyPolicyTemplate();
}


/**
 * Shows the lost screen.
 */
function showLostScreen() {
  document.querySelector(`.you-lost-container`).classList.remove("d-none");
  hideActionBtns();
}


/**
 * Shows the win screen.
 */
function showWinScreen() {
  document.querySelector(`.you-win-container`).classList.remove("d-none");
  hideActionBtns();
}


/**
 * Event Listener for {keydown} event.
 * Waits till a key is pressed down. 
 * Calls the activatePressedKey function.
 */
pressedKey = window.addEventListener("keydown", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  activatePressedKey(pressedKey);
});


/**
 * Event Listener for {keyup} event. 
 * Listens to a key being released.
 * Calls the activatePressedKey function.
 */
releasedKey = window.addEventListener("keyup", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  deactivatePressedKey(pressedKey);
});


/**
 * @param {string} pressedKey Key that was pressed.
 * Checks if the pressed key is in {keyCollection}
 * Switches variable to true when key is found. 
 */
function activatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = true;
  }
}


/**
 * @param {string} pressedKey Key that was released.
 * Checks if the pressed key is in {keyCollection}
 * Switches variable to true when key is found. 
 */
function deactivatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = false;
  }
}
