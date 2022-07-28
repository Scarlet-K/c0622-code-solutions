var $userList = document.querySelector('#user-list');

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'JSON';
  xhr.addEventListener('load', function () {
    console.log('status:', xhr.status);
    console.log('reponse:', xhr.response);
    var parsedData = JSON.parse(xhr.response);
    for (var i = 0; i < parsedData.length; i++) {
      var $li = document.createElement('li');
      $li.textContent = parsedData[i].name;
      $userList.append($li);
    }
  });
  xhr.send();
}

getUserData();
