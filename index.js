//
// document.querySelectorAll("button").forEach(function(btn) {
//   btn.addEventListener("click", function handleClick() {
//     alert("I got clicked!");
//   });
// });


// Detecting Button Press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function click() {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener('keydown', function(event) {

  makeSound(event.key);

  // buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      const highTom = new Audio('sounds/high-tom.mp3');
      highTom.play();
      break;

    case "a":
      const midTom = new Audio('sounds/mid-tom.mp3');
      midTom.play();
      break;

    case "s":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      const floorTom = new Audio('sounds/floor-tom.mp3');
      floorTom.play();
      break;

    case "j":
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      const bassDrum = new Audio('sounds/bass-drum.mp3');
      bassDrum.play();
      break;

    case "l":
      const hiHat = new Audio('sounds/hi-hat.mp3');
      hiHat.play();
      break;

    default:

  }
}

// function buttonAnimation(currentKey) {
//
//   var activeButton = document.querySelector("." + currentKey);
//
//   activeButton.classList.add('pressed');
//
//   setTimeout(function() {
//     activeButton.classList.remove('pressed');
//   }, 100);
//
// }
