import React from 'react'

/* PARAMS */
import { getPokemonUrlThumb } from '../../config/config'

/* STYLE */
import './PokemonListItem.css'

const PokemonListItem = ({ id, pokemonData, language, setSectionShowed, setPokemonUrl }) => {



    const handleClick = () => {
        setPokemonUrl(pokemonData.url)
        setSectionShowed('pokemonDetails')

    }

    return (

        <div onClick={handleClick} className="pokemonListItem link" >

            <img className="thumb" src={getPokemonUrlThumb(id)} alt="Imagen no disponible" />
            <br />
            <span className="pokemonName">{pokemonData.name.toUpperCase()}
            </span>
            <br />
        </div>
    )
}

export default PokemonListItem;

