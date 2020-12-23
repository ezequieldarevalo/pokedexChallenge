import React from 'react'

const Descriptions = ({ language, baseExperience, height, weight }) => {
    return (
        <div className="pokemon-info-section">
            <h2 id="descriptions-title">{(language === 'ES') ? 'DESCRIPCION' : 'DESCRIPTION'}</h2>
            <span id="descrition-base-experience">
                <strong>{(language === 'ES') ? 'Experiencia base: ' : 'Base experience: '}</strong>{baseExperience}
            </span>
            <br />
            <span id="descrition-height">
                <strong>{(language === 'ES') ? 'Altura: ' : 'Height: '}</strong>{height + ' dm'}
            </span>
            <br />
            <span id="descrition-weight">
                <strong>{(language === 'ES') ? 'Peso: ' : 'Weight: '}</strong>{weight + ' hg'}
            </span>



        </div>
    )
}

export default Descriptions;
