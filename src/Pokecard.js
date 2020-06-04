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
                        <h5 className='PokemonName'>{name}<br /> #{pokemon_id}</h5>
                        <div className='Attributes'>
                            <div id={pokemon_id} className='Attribute Type'>{type}</div>
                            <span className='TypeIconWrapper'>
                                <i className="TypeIcon"></i>
                            </span>
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

function updateTypeColor() {
    let pokemon_collection = document.getElementsByClassName('Attribute Type');
    let icons = document.getElementsByClassName('TypeIcon');
    let wrappers = document.getElementsByClassName('TypeIconWrapper');
    for (let i=0; i < pokemon_collection.length; i++) {
        switch(pokemon_collection[i].innerText) {
            case 'Fire': pokemon_collection[i].className += ' Fire'; 
                icons[i].className += ' fas fa-fire'
                wrappers[i].className += ' Fire-Icon'
                break;
            case 'Water': pokemon_collection[i].className += ' Water'; 
                icons[i].className += ' fas fa-burn';
                wrappers[i].className += ' Water-Icon'
                break;
            case 'Poison': pokemon_collection[i].className += ' Poison'; break; 
            case 'Ground': pokemon_collection[i].className += ' Ground'; break; 
            case 'Rock': pokemon_collection[i].className += ' Rock'; break; 
            case 'Electric': pokemon_collection[i].className += ' Electric'; break; 
            case 'Bug': pokemon_collection[i].className += ' Bug'; break; 
            case 'Grass': pokemon_collection[i].className += ' Grass'; break; 
            case 'Psychic': pokemon_collection[i].className += ' Psychic'; break; 
            case 'Ice': pokemon_collection[i].className += ' Ice'; break; 
            case 'Flying': pokemon_collection[i].className += ' Flying'; break; 
            case 'Normal': pokemon_collection[i].className += ' Normal'; break; 
            case 'Fighting': pokemon_collection[i].className += ' Fighting'; break; 
            default: 
                wrappers[i].innerText = pokemon_collection[i].innerText;
            break;
        }
    }
}


export default Pokecard;
export { updateTypeColor };