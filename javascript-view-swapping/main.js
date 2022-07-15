var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTabClick);

function handleTabClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabList.length; i++) {
    if (event.target === $tabList[i]) {
      $tabList[i].classList.add('active');
    } else {
      $tabList[i].classList.remove('active');
    }
  }

  var $eventView = event.target.getAttribute('data-view');

  for (var k = 0; k < $viewList.length; k++) {
    if ($eventView === $tabList[k].getAttribute('data-view')) {
      $viewList[k].classList.remove('hidden');
    } else {
      $viewList[k].classList.add('hidden');
    }
  }
}
