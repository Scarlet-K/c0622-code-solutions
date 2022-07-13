// query for the DOM element that opens the modal
// query for the DOM element that closes the modal
// add an event listener on the element that opens the modal
// create a callback function that removes the class hide on the overlay that contains the modal
// add an event listener on the element that closes the modal
// create a callback function that attaches the class hide on the overlay that contains the modal

var $openModal = document.querySelector('.open');
var $overlay = document.querySelector('.overlay');
var $closeModal = document.querySelector('.close');

$openModal.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);

function openModal(event) {
  $overlay.className = 'overlay fixed';
}

function closeModal(event) {
  $overlay.className = 'overlay fixed hide';
}
