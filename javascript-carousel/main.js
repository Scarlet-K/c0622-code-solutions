var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $img = document.querySelector('img');
var intervalID = setInterval(getNextIndex, 3000);
var index = 0;
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $circleList = document.querySelectorAll('.fa-circle');
var $circleContainer = document.querySelector('.circle-container');

$leftArrow.addEventListener('click', showPreviousImage);
$rightArrow.addEventListener('click', showNextImage);
$circleContainer.addEventListener('click', handleCircles);

function showPreviousImage(event) {
  clearInterval(intervalID);
  getPreviousIndex();
  intervalID = setInterval(getNextIndex, 3000);
}

function showNextImage(event) {
  clearInterval(intervalID);
  getNextIndex();
  intervalID = setInterval(getNextIndex, 3000);
}

function handleCircles(event) {
  if (event.target.tagName === 'I') {
    clearInterval(intervalID);
    // for (var i = 0; i < $circleList.length; i++) {
    //   console.dir(event.target.dataset);
    //   // got the dataindex value of each clicked circle
    // }
    var dataIndex = event.target.getAttribute('data-index');
    for (var i = 0; i < images.length; i++) {
      if (dataIndex === JSON.stringify(i)) {
        $img.setAttribute('src', images[i]);
        $circleList[i].classList.add('fa-solid');
        $circleList[i].classList.remove('fa-regular');
      } else {
        $circleList[i].classList.add('fa-regular');
        $circleList[i].classList.remove('fa-solid');
      }
    }
  }
  index = 0;
  intervalID = setInterval(getNextIndex, 3000);
}

function getPreviousIndex() {
  if (index !== 0) {
    index--;
    $img.setAttribute('src', images[index]);
    $circleList[index].classList.add('fa-solid');
    $circleList[index].classList.remove('fa-regular');
    $circleList[index + 1].classList.remove('fa-solid');
    $circleList[index + 1].classList.add('fa-regular');
  } else {
    index = images.length - 1;
    $img.setAttribute('src', images[index]);
    $circleList[images.length - 1].classList.add('fa-solid');
    $circleList[images.length - 1].classList.remove('fa-regular');
    $circleList[0].classList.remove('fa-solid');
    $circleList[0].classList.add('fa-regular');
  }
}

function getNextIndex() {
  if (index < images.length - 1) {
    index++;
    $img.setAttribute('src', images[index]);
    $circleList[index].classList.add('fa-solid');
    $circleList[index].classList.remove('fa-regular');
    $circleList[index - 1].classList.remove('fa-solid');
    $circleList[index - 1].classList.add('fa-regular');
  } else {
    index = 0;
    $img.setAttribute('src', images[0]);
    $circleList[0].classList.add('fa-solid');
    $circleList[0].classList.remove('fa-regular');
    $circleList[images.length - 1].classList.remove('fa-solid');
    $circleList[images.length - 1].classList.add('fa-regular');
  }
}
