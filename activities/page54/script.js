let letters = document.querySelectorAll(".letter");
let images = document.querySelectorAll(".input");
let boxes = document.querySelectorAll(".box");
let dragLetter, dropBox;

letters.forEach((letter) => {
  letter.addEventListener("dragstart", dragStart);
  letter.addEventListener("dragend", dragEnd);
});

images.forEach((image) => {
  image.addEventListener("dragover", dragOver);
  image.addEventListener("dragenter", dragEnter);
  image.addEventListener("dragleave", dragLeave);
  image.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.log("drag started");
  dragLetter = this;
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  console.log("drag Ended");
  this.className = "letter";
  dragLetter = null;
}
function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}
function dragEnter() {
  console.log("drag entered");
}
function dragLeave() {
  console.log("drag left");
}
function dragDrop() {
  console.log("drag dropped");
  boxes.forEach((box) => {
    if ((box.id === this.id) & (box.id == dragLetter.getAttribute("answer"))) {
      box.append(dragLetter);
      playClapSound();
    } else if (
      (box.id === this.id) &
      (box.id !== dragLetter.getAttribute("answer"))
    ) {
      playIncorrectSound();
      this.classList.add("shake");
      setTimeout(() => this.classList.remove("shake"), 400);
    }
  });
}

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
