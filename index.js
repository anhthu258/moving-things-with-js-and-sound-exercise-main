const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`; // Flytter dodger 10px til venstre
  } else {
    playGameOverSound(); // spiller gameover lyden når dodgeren rammer venstre væg
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Påstår containerens bredde er 400px da dodgerens bredde er 40px, dette limit dodger til at ikke at flytte ud af containeren
    dodger.style.left = `${left + 10}px`; // Flytte dodgeren 10px til højre
  } else {
    playGameOverSound(); // spiller gameover lyden når dodgeren rammer højre væg
}
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 360) { // Limiter dodger til at ikke at flytte ud af containeren
    dodger.style.bottom = `${bottom + 10}px`; // Flytter dodger 10px oppe
  }  else {
    playGameOverSound(); // spiller gameover lyden når dodgeren rammer top væg
}
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`; // Flyttere dodger 10px ned
  }  else {
    playGameOverSound(); // spiller gameover lyden når dodgeren rammer bunden
}
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      playSoundOnMovement(); // spiller lyden når der flyttes til venstre
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
      playSoundOnMovement(); // spiller lyden når der flyttes til højre
    } else if (e.key === "ArrowUp") {
      moveDodgerUp();
      playSoundOnMovement(); // spiller lyden når der flyttes op
    } else if (e.key === "ArrowDown") {
      moveDodgerDown();
      playSoundOnMovement(); // spiller lyden når der flyttes ned
    }
  });

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  movementSound.currentTime = 0; // Sætter lyden tilbage til starten
  movementSound.play(); // Spiller lyden
}

const gameoverSound = document.getElementById("gameoverSound");
function playGameOverSound() {
  gameoverSound.currentTime = 0; // Sætter lyden tilbage til starten
  gameoverSound.play(); // Spiller lyden
}

function setDodgerToMiddle() {
    const containerWidth = 400;
    const containerHeight = 400;
    const dodgerHeight = 40;
  
    // beregner midten positionen
    const middleLeft = (containerWidth - dodgerWidth) / 2;
    const middleBottom = (containerHeight - dodgerHeight) / 2;
  
    // konfigurer dodgerens position
    dodger.style.left = `${middleLeft}px`;
    dodger.style.bottom = `${middleBottom}px`;
  }

  setDodgerToMiddle();