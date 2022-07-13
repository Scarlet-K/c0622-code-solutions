// query for all elements that are span
// store the nodelist in a variable
// when used in keyboard event:
// event.key = returns the value of the key pressed
//

var $container = document.querySelectorAll('.container');

$container.addEventListener('keydown', handleKeydown);

function handleKeydown() {
  return 0;
}
