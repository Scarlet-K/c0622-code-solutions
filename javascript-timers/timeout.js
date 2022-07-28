var $message = document.querySelector('.message');
var timeoutID = setTimeout(sayHelloThere, 2000);

function sayHelloThere() {
  $message.textContent = 'Hello There';
  clearTimeout(timeoutID);
}
