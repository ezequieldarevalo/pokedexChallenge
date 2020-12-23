import React from 'react'
import ReactDOM from 'react-dom';
import Abilities from './Abilities'

const emptyArray = [];
const abilitiesArray = [
    {
        ability: {
            name: "ability1",
            url: "https://pokeapi.co/api/v2/ability/110/"
        }
    },
    {
        ability: {
            name: "ability2",
            url: "https://pokeapi.co/api/v2/ability/111/"
        }
    },
    {
        ability: {
            name: "ability3",
            url: "https://pokeapi.co/api/v2/ability/112/"
        }
    },
    {
        ability: {
            name: "ability4",
            url: "https://pokeapi.co/api/v2/ability/110/"
        }
    },

]
const espanol = 'ES'
const english = 'EN'

it('title respecting spanish language and no crashing with empty array', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Abilities data={emptyArray} language={espanol} />, div);
    expect(div.querySelector("#abilities-title").textContent).toBe('HABILIDADES');
    ReactDOM.unmountComponentAtNode(div);
})

it('title respecting english language and no crashing with empty array', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Abilities data={emptyArray} language={english} />, div);
    expect(div.querySelector("#abilities-title").textContent).toBe('ABILITIES');
    ReactDOM.unmountComponentAtNode(div);
})

it('no crashing with no empty array and spanish language', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Abilities data={abilitiesArray} language={espanol} />, div);
    expect(div.querySelector("#abilities-title").textContent).toBe('HABILIDADES');
    ReactDOM.unmountComponentAtNode(div);
})

it('no crashing with no empty array and english language', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Abilities data={abilitiesArray} language={english} />, div);
    expect(div.querySelector("#abilities-title").textContent).toBe('ABILITIES');
    ReactDOM.unmountComponentAtNode(div);
})