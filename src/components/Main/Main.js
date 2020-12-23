import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* PARAMS */
import { backendBaseUrl, paginationIndex } from '../../config/config'

/* STYLE */
import './Main.css'

/* COMPONENTS */
import PokemonList from '../PokemonList/PokemonList'
import Pagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading'

const Main = ({ language, currentPage, setPokemonUrl, setSectionShowed, changePage }) => {

    const [loading, setLoading] = useState(true);
    const [pokemonsData, setPokemonsData] = useState([]);
    const [totalNumberPages, setTotalNumberPages] = useState(0);

    useEffect(() => {
        const getPokemonList = async () => {
            setLoading(true);
            let offset = (currentPage - 1) * paginationIndex;
            let urlSuffix = '/pokemon?offset=' + offset + '&limit=' + paginationIndex;
            axios.get(backendBaseUrl + urlSuffix)
                .then((response) => {
                    setPokemonsData(response.data.results);
                    let numberOfPages = Math.ceil(response.data.count / paginationIndex);
                    setTotalNumberPages(numberOfPages);
                    setLoading(false);


                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getPokemonList();
    }, [currentPage])



    return (<>

        {loading && <Loading language={language} />}

        {!loading &&

            <div id="main">

                <PokemonList
                    setPokemonUrl={setPokemonUrl}
                    language={language}
                    currentPage={currentPage}
                    pokemonsData={pokemonsData}
                    setSectionShowed={setSectionShowed}
                />

                <Pagination
                    language={language}
                    currentPage={currentPage}
                    totalNumberPages={totalNumberPages}
                    changePage={changePage}
                />

            </div>

        }

    </>)
}

export default Main;
