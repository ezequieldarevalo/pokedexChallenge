import React, { useState } from 'react'
import './App.css'
import 'animate.css'

/* COMPONENTS */
import LangSelection from './components/LangSelection/LangSelection'
import Main from './components/Main/Main'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'


/*

********Component Hierarchy Map********

-App
    -LangSelection
    -Main
        -PokemonList
        -Pagination
    -PokemonDetails
        -Abilities
        -Descriptions
        -Images


*/

function App() {

  /*ATTRIBUTES*/

  // Spanish --> value 'ES'
  // English --> value 'EN'
  const [language, setLanguage] = useState('ES');


  // Number >= 1  && Number <= Math.ceil(response.data.count / paginationIndex)
  const [currentPage, setCurrentPage] = useState(1);

  // if component Main --> value 'main' (default)
  // if component PokemonDetails --> value 'pokemonDetails'
  const [sectionShowed, setSectionShowed] = useState('main');

  // setted from PokemonList component
  const [pokemonUrl, setPokemonUrl] = useState('');

  /*FUNCTIONS*/

  // setted from Pagination component
  const changePage = (page) => {
    setCurrentPage(page);
  }

  /*RENDER*/

  return (
    <div id="App">

      <LangSelection language={language} setLanguage={setLanguage} />


      { // MAIN SECTION - CONTAINS LIST OF POKEMON AND PAGINATION SECTION
        (sectionShowed === 'main') &&
        <Main
          language={language}
          currentPage={currentPage}
          setSectionShowed={setSectionShowed}
          changePage={changePage}
          setPokemonUrl={setPokemonUrl}
        />

      }

      { // ONE POKEMON INFO PAGE
        (sectionShowed === 'pokemonDetails') &&
        <PokemonDetails
          language={language}
          pokemonUrl={pokemonUrl}
          setSectionShowed={setSectionShowed}
        />
      }

    </div>
  );
}

export default App;
