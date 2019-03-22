import React, { Component } from 'react';
import Team from './Team.js';
import './App.css';
import pokemon from './data.json';
// https://www.reddit.com/r/PokemonLetsGo/comments/a2rcs6/dualtype_weakness_chart_google_sheet/

function padPokemonID(id) {
  if (id.toString().length !== 3) {
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
  <div className="poke_types"><div class="type grass">grass</div><div class="type poison">poison</div></div>
  <img className="poke_sprite animated" src={`/images/${padPokemonID(pokemon.id)}.gif`} />
  <svg class="stage-icon" id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
viewBox='0 0 185 82'>
    <defs>
        <filter id='svg_3_blur' x='-50' y='-50' width='200' height='200'>
            <feGaussianBlur in='SourceGraphic' />
        </filter>
    </defs>
    <rect id='canvas_background' data-name='canvas background' className='cls-1'
    x='-1' y='-1' width='584' height='404' />
    <g id='svg_3' data-name='svg 3' className='cls-2'>
        <ellipse className='cls-3' cx='93.25' cy='40.94' rx='83.5' ry='32.5' />
        <ellipse className='cls-4' cx='93.25' cy='40.94' rx='83.5' ry='32.5' />
    </g>
    <ellipse id='svg_1' data-name='svg 1' className='cls-5' cx='94' cy='41.86'
    rx='71' ry='22.35' />
</svg>
</article>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Pokédex</h1>
          <Team />
          <div className="grid-container">
            {listPokemon}
          </div>
        </main>
      </div>
    );
  }
}



export default App;
