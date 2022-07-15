var books = [
  {
    isbn: '023984',
    title: 'The Giver',
    author: 'Lowis Lowry'
  },
  {
    isbn: '0239804',
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    isbn: '23942948',
    title: 'Little Prince',
    author: 'French Guy'
  }
];

console.log('Type of books:', typeof books);

var serializedBooks = JSON.stringify(books);
console.log('Type of serializedBooks:', typeof serializedBooks);

var serializedStudent = '{"id":"234","name":"Scarlet"}';
console.log('Type of serializedStudent:', typeof serializedStudent);

var parsedStudent = JSON.parse('{"id":"234","name":"Scarlet"}');
console.log('Type of parsedStudent:', typeof parsedStudent);
