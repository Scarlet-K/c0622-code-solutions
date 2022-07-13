// query for all elements that are span
// store the nodelist in a variable
// when used in keyboard event:
// event.key = returns the value of the key pressed
//

var $characters = document.querySelectorAll('span');
var counter = 0;
window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if (($characters[counter].textContent === event.key) && (counter !== $characters.length - 1)) {
    $characters[counter].className = 'correct';
    $characters[counter + 1].className = 'border-bottom';
    counter++;
  } else if (($characters[counter].textContent !== event.key) && (counter !== $characters.length - 1)) {
    $characters[counter].className = 'incorrect';
  } else if (counter === $characters.length - 1) {
    event.preventDefault();
  }
}
