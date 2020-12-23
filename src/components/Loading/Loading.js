import React from 'react'

/* STYLE */
import './Loading.css'

const Loading = ({ language }) => {
    return (
        <div className="animate__animated animate__flash" id="loading">

            {(language === 'ES') ? 'Cargando ...' : 'Loading...'}

        </div>
    )
}

export default Loading;
