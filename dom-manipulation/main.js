var clickCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

function handleClicks(event) {
  clickCount++;
  $clicks.textContent = clickCount;
  if ((clickCount >= 4) && (clickCount < 7)) {
    $hotButton.className = 'hot-button cool';
  } else if ((clickCount >= 7) && (clickCount < 10)) {
    $hotButton.className = 'hot-button tepid';
  } else if ((clickCount >= 10) && (clickCount < 13)) {
    $hotButton.className = 'hot-button warm';
  } else if ((clickCount >= 13) && (clickCount < 16)) {
    $hotButton.className = 'hot-button hot';
  } else if (clickCount >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClicks);

// 4 is cool
// 7 is tepid
// 10 is warm
// 13 is hot
// 16 is nuclear
