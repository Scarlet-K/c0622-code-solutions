import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// function CreateList(props) {
//   const deck = props.pokedex;
//   const pokemons = deck.map(pokemon =>
//     <li key={pokemon.number}>{pokemon.name}</li>
//   );
//   return (
//     <ul>{pokemons}</ul>
//   );
// }

const element = (
  <ul>
    {
      pokedex.map(pokemon => {
        return <li key={pokemon.number}>{pokemon.name}</li>;
      })
    }
  </ul>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// root.render(<CreateList deck={pokedex} />);
root.render(element);
