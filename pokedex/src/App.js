import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from './data.json';

function padPokemonID(id) {
  if (id.toString().length != 3) {
    let num_arr = id.toString().split('');
    let length = num_arr.length;
    let num_zeros = 3 - length;
    for (var j=0; j<num_zeros; j++) {
        num_arr.unshift('0');
    }
    let padded_pokedex_num = num_arr.toString().replace(/,/g,"");
    return padded_pokedex_num;
  } else {
    return id;
  }
}

const listPokemon = pokemon.map((pokemon) => 
<article className="poke" key={pokemon.id}>
  <h1 className="poke_name">{pokemon.name.english}</h1>
  <img className="poke_sprite" src={`/images/${padPokemonID(pokemon.id)}.gif`} />
</article>
);



class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Pokédex</h1>
          <div className="grid-container">
            {listPokemon}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
