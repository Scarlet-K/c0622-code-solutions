var $message = document.querySelector('.message');

function sayHelloThere() {
  $message.textContent = 'Hello There';
  clearTimeout(timeoutID);
}

var timeoutID = setTimeout(sayHelloThere, 2000);
