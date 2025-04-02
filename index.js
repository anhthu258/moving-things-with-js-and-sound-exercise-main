const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`; // Flytter dodger 10px til venstre
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Påstår containerens bredde er 400px da dodgerens bredde er 40px, dette limit dodger til at ikke at flytte ud af containeren
    dodger.style.left = `${left + 10}px`; // Flytte dodgeren 10px til højre
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) { // Limiter dodger til at ikke at flytte ud af containeren
    dodger.style.bottom = `${bottom + 10}px`; // Flytter dodger 10px oppe
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`; // Flyttere dodger 10px ned
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