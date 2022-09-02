// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET'
// })
//   .then(response => response.json())
//   .then(result => console.log(result));

fetch('https://pokeapi.co/api/v2/pokmon/6')
  .then(myfavorite => myfavorite.json())
  .then(pokemon => console.log(pokemon))
  .catch(err => console.log(err));
