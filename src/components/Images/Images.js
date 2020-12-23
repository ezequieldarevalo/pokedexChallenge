import React from 'react'

const Images = ({ imageLinks, language }) => {

    return (
        <div className="pokemon-info-section image-section">
            <h2>{(language === 'ES') ? 'IMAGENES' : 'IMAGES'}</h2>
            <div id="cont-images">
                {imageLinks.map((value, index) => {
                    return <img key={index} src={value} alt={'image-' + index} width="145" height="145" />
                })}
            </div>



        </div>
    )
}

export default Images;
