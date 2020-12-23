import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* STYLE */
import './PokemonDetails.css'

/* COMPONENTS */
import Loading from '../Loading/Loading'
import Abilities from '../Abilities/Abilities'
import Descriptions from '../Descriptions/Descriptions'
import Images from '../Images/Images'

const PokemonDetails = ({ language, pokemonUrl, setSectionShowed }) => {

    const [loading, setLoading] = useState(true);
    const [infoPokemon, setInfoPokemon] = useState({})
    const [imageLinks, setImageLinks] = useState([]);

    useEffect(() => {

        const getPokemonDetails = async () => {
            setLoading(true);
            axios.get(pokemonUrl)
                .then((response) => {
                    setInfoPokemon(response.data);
                    var newSprites = [];
                    const obj = response.data.sprites;
                    for (var key in obj) {
                        if (obj[key] !== null && typeof (obj[key]) === 'string') {
                            newSprites.push(obj[key]);
                        }

                    }
                    setImageLinks(newSprites)
                    setLoading(false);

                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getPokemonDetails();

    }, [pokemonUrl])

    const handleBack = () => {
        setSectionShowed('main');
    }

    return (
        <div id="pokemonDetails">

            <h1>{infoPokemon.name}</h1>

            <div className="animate__animated animate__bounceInDown" id="cont-details">



                {loading && <Loading language={language} />}

                {!loading && <>



                    <Abilities language={language} data={infoPokemon.abilities} />
                    <Descriptions
                        language={language}
                        baseExperience={infoPokemon.base_experience}
                        height={infoPokemon.height}
                        moves={infoPokemon.moves}
                        weight={infoPokemon.weight} />

                    <Images language={language} imageLinks={imageLinks} />




                </>
                }
            </div>
            <div id="backToList">
                <span className="pag-mid link" onClick={handleBack}>
                    {(language === 'ES') ? 'ATRAS' : 'BACK'}
                </span>
            </div>

        </div>
    )
}

export default PokemonDetails;
