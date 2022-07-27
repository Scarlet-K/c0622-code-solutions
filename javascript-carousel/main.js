// push all images into an array OR give each image element an ID#
// add an eventlistener on the chevron arrows
// add an eventlistener on the dots
// keep track of the current image OR the current dot
// the current image is the same as current dot.

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $imgList = document.querySelectorAll('.view');
// console.log($imgList);
for (var i = 0; i < $imgList.length; i++) {
  // console.log($imgList[i].getAttribute('data-view'));
}

var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');

$leftArrow.addEventListener('click', showPreviousImage);
$rightArrow.addEventListener('click', showNextImage);

function showPreviousImage(event) {
  for (var i = 0; i < $imgList.length; i++) {
    // var viewID = $imgList[i].getAttribute('data-view');
    // console.log(viewID);
  }
}

function showNextImage(event) {
  var counter = 0;
  $img.setAttribute('src', images[counter + 1]);
}

// function getPreviousIndex () {

// }

// function getNextIndex

// function setIndex
