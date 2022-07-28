var $countdownDisplay = document.querySelector('.countdown-display');
var count = $countdownDisplay.textContent;
var intervalID = setInterval(setCountdownInterval, 1000);

function setCountdownInterval() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    count = '~Earth Beeeelooowww Us~';
    $countdownDisplay.textContent = count;
    clearInterval(intervalID);
  }
}
