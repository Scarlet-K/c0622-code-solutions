var $characters = document.querySelectorAll('span');
var counter = 0;

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  // if ((counter >= $characters.length - 1) && ($characters[counter].textContent === event.key)) {
  //   $characters[counter].className = 'correct';
  //   return;
  // }
  if (($characters[counter].textContent === event.key) && (counter < $characters.length)) {
    $characters[counter].className = 'correct';
    $characters[counter + 1].className = 'border-bottom';
    counter++;
  } else if (($characters[counter].textContent !== event.key) && (counter < $characters.length)) {
    $characters[counter].className = 'incorrect';
  }
}
