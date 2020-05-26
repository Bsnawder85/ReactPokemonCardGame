import { Component } from 'react';
import React from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {
        const dex = [
            {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'Water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'Poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65}
        ];
        /**
         * A Best Practice for rendering multiple Components 
         * from a JavaScript collection in JSX is to first 
         * place the results in a variable before use.
         */
        const rendered_pokecards = dex.map(pokemon => {
            return <Pokecard 
                    key={pokemon.name}
                    id={pokemon.id.toString()}
                    name={pokemon.name}
                    type={pokemon.type}
                    base_exp={pokemon.base_experience}
                    />
        });
        return (
            <div className='Pokedex'>{rendered_pokecards}</div>
        );
    }
}

export default Pokedex;