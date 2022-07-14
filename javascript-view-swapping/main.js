var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTabClick);

function handleTabClick(event) {
  var $eventView = event.target.getAttribute('data-view');
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabList.length; i++) {
    if (($eventView === $tabList[i].getAttribute('data-view')) && ($eventView === $viewList[i].getAttribute('data-view'))) {
      $tabList[i].classList.add('active');
      $viewList[i].classList.remove('hidden');
    } else {
      $tabList[i].classList.remove('active');
      $viewList[i].classList.add('hidden');
    }
  }
}
