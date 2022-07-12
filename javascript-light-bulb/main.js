// create a variable to select the DOM element with a class .dark
// create a variable to select the DOM element with a calss .dark-backg
// add an event listener for click event
// create a callback function to handle click event:
// if it is off, turn the light on
// change the variable to the opposite value
// it if is on, turn the light off
// change the variable to the opposite value

var $lightbulb = document.querySelector('.dark');
var $body = document.querySelector('.dark-backg');
var off = true;

$lightbulb.addEventListener('click', handleLightBulb);

function handleLightBulb(event) {
  if (off === true) {
    $lightbulb.className = 'light';
    $body.className = 'light-backg';
    off = false;
  } else {
    $lightbulb.className = 'dark';
    $body.className = 'dark-backg';
    off = true;
  }
}
