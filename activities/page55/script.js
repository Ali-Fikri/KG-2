let isCorrect;

// Handle choice selection
document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    isCorrect = choice.getAttribute("isCorrect") === "true";
    if (isCorrect) {
      choice.classList.add("correct");
      playClapSound();
    } else {
      choice.classList.add("shake");
      choice.classList.add("incorrect");
      playIncorrectSound();
      setTimeout(() => {
        choice.classList.remove("shake");
        choice.classList.remove("incorrect");
      }, 400);
    }
  });
});

function playClapSound() {
  const sound = document.getElementById("clapSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function playIncorrectSound() {
  const sound = document.getElementById("inCorrectSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
