import React from 'react'


/* STYLE */
import './PokemonList.css'

/* COMPONENTS */
import PokemonListItem from '../PokemonListItem/PokemonListItem'

const PokemonList = ({ language, pokemonsData, currentPage, setSectionShowed, setPokemonUrl }) => {

    return (
        <div id="pokemonList" className="animate__animated animate__bounceInDown" >

            {
                pokemonsData.map((pokemonData, i) => {
                    let parts = pokemonData.url.split('/');
                    const id = parts[parts.length - 2];

                    return <PokemonListItem
                        key={i}
                        id={id}
                        pokemonData={pokemonData}
                        language={language}
                        setSectionShowed={setSectionShowed}
                        setPokemonUrl={setPokemonUrl}
                    />
                })

            }



        </div>
    )
}

export default PokemonList
