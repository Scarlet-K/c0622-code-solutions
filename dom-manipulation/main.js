var clickCount = 0;
var temperature = '';
var $hotButton = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

function handleClicks(event) {
  clickCount++;
  $clicks.textContent = clickCount;
  if (clickCount < 4) {
    temperature = 'cold';
  } else if (clickCount < 7) {
    temperature = 'cool';
  } else if (clickCount < 10) {
    temperature = 'tepid';
  } else if (clickCount < 13) {
    temperature = 'warm';
  } else if (clickCount < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clicks.textContent = 'Clicks: ' + clickCount;
}

$hotButton.addEventListener('click', handleClicks);
