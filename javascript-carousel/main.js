var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var intervalID = setInterval(getNextIndex, 3000);
var index = 0;
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');
var $circles = document.querySelectorAll('.fa-circle');
var $circleContainer = document.querySelector('.circle-container');

$leftArrow.addEventListener('click', showPreviousImage);
$rightArrow.addEventListener('click', showNextImage);
$circleContainer.addEventListener('click', handleCircles);

function showPreviousImage(event) {
  clearInterval(intervalID);
  getPreviousIndex();
}

function showNextImage(event) {
  clearInterval(intervalID);
  getNextIndex();
}

function handleCircles(event) {
  clearInterval(intervalID);
  if (event.target.tagName === 'I') {
    var dataIndex = event.target.getAttribute('data-index');
    for (var i = 0; i < images.length; i++) {
      if (dataIndex === JSON.stringify(i)) {
        $img.setAttribute('src', images[i]);
        $circles[i].classList.add('fa-solid');
        $circles[i].classList.remove('fa-regular');
      } else {
        $circles[i].classList.add('fa-regular');
        $circles[i].classList.remove('fa-solid');
      }
    }
  }
}

function getPreviousIndex() {
  if (index === 0) {
    index = images.length - 1;
    $img.setAttribute('src', images[index]);
  } else {
    index--;
    $img.setAttribute('src', images[index]);
  }
}

function getNextIndex() {
  if (index === images.length - 1) {
    index = 0;
    $img.setAttribute('src', images[0]);
    $circles[0].classList.add('fa-solid');
    $circles[0].classList.remove('fa-regular');
  } else {
    index++;
    $img.setAttribute('src', images[index]);
    $circles[index].classList.add('fa-solid');
    $circles[index].classList.remove('fa-regular');
    $circles[index - 1].add('fa-regular');
    $circles[index - 1].remove('fa-solid');
  }
}

// function setIndex
