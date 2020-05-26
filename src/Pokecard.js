import { Component } from 'react';
import React from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    zeroPadPokemonId = function (id) {
        let pid = (typeof id == 'number') ? id.toString() : id;
        switch(pid.length) {
            case 1: pid = `00${pid}`; break;
            case 2: pid = `0${pid}`; break;
            default: break;
        }
        return pid;
    }
    render() {
        const {id, name, type, base_exp} = this.props;
        const pokemon_id = this.zeroPadPokemonId(id);
        const image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon_id}.png`;
        return (
            <div className='Pokecard'>
                <div className='FlipCard'>
                    <div className='FlipCardFront'>
                        <img className='PokemonImg' src={image_url} alt={name}/>
                        <h5 className='PokemonName'>{name} #{pokemon_id}</h5>
                        <div className='Attributes'>
                            <div id={pokemon_id} className='Attribute Type'>{type}</div>
                            <div className='Attribute Exp'>EXP: {base_exp}</div>
                        </div>
                    </div>
                    <div className='FlipCardBack'>
                        <h2>POKEMON</h2>
                        <h5>The Card Game</h5>
                    </div>
                </div>
            </div>
        );
    }
}


export default Pokecard;