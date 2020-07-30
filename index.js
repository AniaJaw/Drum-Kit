//
// document.querySelectorAll("button").forEach(function(btn) {
//   btn.addEventListener("click", function handleClick() {
//     alert("I got clicked!");
//   });
// });


// Detectiong Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function click() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // buttonAnimation(buttonInnerHTML);
  });
}

// Detectiong Keyboard Press

document.addEventListener('keydown', function(event) {

  makeSound(event.key);

  // buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var highTom = new Audio('sounds/high-tom.mp3');
      highTom.play();
      break;

    case "a":
      var midTom = new Audio('sounds/mid-tom.mp3');
      midTom.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var floorTom = new Audio('sounds/floor-tom.mp3');
      floorTom.play();
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var bassDrum = new Audio('sounds/bass-drum.mp3');
      bassDrum.play();
      break;

    case "l":
      var hiHat = new Audio('sounds/hi-hat.mp3');
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
