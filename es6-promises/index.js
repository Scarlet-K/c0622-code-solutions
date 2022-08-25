const takeAChance = require('./take-a-chance');
const promise = takeAChance('Scarlet');

promise.then(message => {
  console.log(message);
});
promise.catch(error => {
  console.log(error.message);
});

// promise.then(message => {
//   console.log(message);
// }).catch(error => {
//   console.log(error.message);
// });

// promise.then(message => {
//   console.log(message);
// }, error => {
//   console.log(error.message);
// });
