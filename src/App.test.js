import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import { paginationIndex } from './config/config';
import ReactTestUtils from 'react-dom/test-utils';


it('pagination index is respected', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    //give time to do fetchs
    setTimeout(() => {
        expect(div.querySelectorAll(".pokemonListItem")).toHaveLength(paginationIndex);
    }, 1000);
    ReactDOM.unmountComponentAtNode(div);
})