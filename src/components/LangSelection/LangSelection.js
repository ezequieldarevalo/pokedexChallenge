import React from 'react'

/* RESOURCES */
import eslang from '../../resources/img/eslang.png';
import enlang from '../../resources/img/enlang.png';

/* STYLE */
import './LangSelection.css'


const LangSelection = ({ language, setLanguage }) => {

    return (
        <div id="languageSelection">
            {(language === 'ES') ?
                'Idioma  ' : 'Language  '
            }
             &nbsp;&nbsp;
            <div id="languages"><img onClick={() => setLanguage('ES')} className="image-lang" src={eslang} alt="" width="30" height="20" />
&nbsp;&nbsp;


                <img onClick={() => setLanguage('EN')} className="image-lang" src={enlang} alt="" width="30" height="20" />
            </div>


        </div>
    )
}

export default LangSelection;
