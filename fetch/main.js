// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET'
// })
//   .then(response => response.json())
//   .then(result => console.log(result));

fetch('https://pokeapi.co/api/v2/pokmon/6')
  .then(myfavorite => myfavorite.json()) // in return expression json method of myfavorite object is being called
  .then(pokemon => console.log(pokemon)) // then method of the return of the previous then method
  .catch(err => console.err('Fetch failed!', err));

// const fetchPromise = fetch('https://pokeapi.co/api/v2/pokmon/6');
// const jsonPromise = fetchPromise.then(myfavorite => myfavorite.json());
// const logPromise = jsonPromise.then(pokemon => console.log(pokemon));

// logPromise.catch(err => console.err('Fetch failed!', err));
