import React from 'react'

/* RESOURCES */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faStepForward, faStepBackward, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

/* STYLE */
import './Pagination.css'

const Pagination = ({ language, totalNumberPages, currentPage, changePage }) => {


    const toBackward = () => {
        let newPage = currentPage - 10;
        if (newPage < 1) {
            changePage(1)
        } else {
            changePage(newPage)
        }
    }

    const toForward = () => {
        let newPage = currentPage + 10;
        if (newPage > totalNumberPages) {
            changePage(totalNumberPages)
        } else {
            changePage(newPage)
        }
    }


    return (
        <div id="pagination">

            <div>

                <span className="pag-init link">
                    {(language === 'ES') ? 'Pagina: ' + currentPage : 'Page: ' + currentPage}
                </span>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;






                {(currentPage > 1) && <>
                    <span className="pag-mid link" onClick={() => { changePage(1) }}>
                        <FontAwesomeIcon icon={faStepBackward} />
                    </span>

                    <span className="pag-mid link" onClick={toBackward}>
                        <FontAwesomeIcon icon={faBackward} />
                    </span>

                    <span className="pag-mid link" onClick={() => { changePage(currentPage - 1) }}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </span>
                </>}




                {(currentPage < totalNumberPages) && <>

                    <span className="pag-mid link" onClick={() => { changePage(currentPage + 1) }}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>

                    <span className="pag-mid link" onClick={toForward}>
                        <FontAwesomeIcon icon={faForward} />
                    </span>

                    <span className="pag-end link" onClick={() => { changePage(totalNumberPages) }}>
                        <FontAwesomeIcon icon={faStepForward} />
                    </span>

                </>}


            </div>


        </div>
    )
}

export default Pagination;
