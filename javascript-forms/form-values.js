var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var $formControls = {};
  $formControls.name = $contactForm.elements.name.value;
  $formControls.email = $contactForm.elements.email.value;
  $formControls.message = $contactForm.elements.message.value;
  console.log('value of $formControls:', $formControls);
  $contactForm.reset();
}
