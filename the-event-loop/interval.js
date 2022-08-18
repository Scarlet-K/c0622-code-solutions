let count = 3;
const id = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(id);
  }
}, 1000);
