import React from 'react'

const Abilities = ({ data, language }) => {
    return (
        <div className="pokemon-info-section">
            <h2 id="abilities-title">{(language === 'ES') ? 'HABILIDADES' : 'ABILITIES'}</h2>
            <ul>
                {data.map((item, index) => {
                    return <li key={index}>{item.ability.name}</li>
                })}
            </ul>

        </div>
    )
}

export default Abilities;
