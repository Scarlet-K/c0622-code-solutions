var $countdownDisplay = document.querySelector('.countdown-display');
var intervalID = setInterval(setCountdownInterval, 1000);

function setCountdownInterval() {
  if ($countdownDisplay.textContent === '4') {
    $countdownDisplay.textContent = '3';
  } else if ($countdownDisplay.textContent === '3') {
    $countdownDisplay.textContent = '2';
  } else if ($countdownDisplay.textContent === '2') {
    $countdownDisplay.textContent = '1';
  } else if ($countdownDisplay.textContent === '1') {
    $countdownDisplay.textContent = '~Earth Beeelooowww Us~';
  } else {
    clearInterval(intervalID);
  }
}
