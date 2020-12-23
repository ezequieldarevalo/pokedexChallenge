import React from 'react'
import ReactDOM from 'react-dom';
import Descriptions from './Descriptions'



const espanol = 'ES'
const english = 'EN'

it('ES language params description', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Descriptions language={espanol} />, div);
    expect(div.querySelector("#descriptions-title").textContent).toBe('DESCRIPCION');
    expect(div.querySelector("#descrition-base-experience strong").textContent).toBe('Experiencia base: ');
    expect(div.querySelector("#descrition-height strong").textContent).toBe('Altura: ');
    expect(div.querySelector("#descrition-weight strong").textContent).toBe('Peso: ');
    ReactDOM.unmountComponentAtNode(div);
})

it('EN language params description', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Descriptions language={english} />, div);
    expect(div.querySelector("#descriptions-title").textContent).toBe('DESCRIPTION');
    expect(div.querySelector("#descrition-base-experience strong").textContent).toBe('Base experience: ');
    expect(div.querySelector("#descrition-height strong").textContent).toBe('Height: ');
    expect(div.querySelector("#descrition-weight strong").textContent).toBe('Weight: ');
    ReactDOM.unmountComponentAtNode(div);
})



