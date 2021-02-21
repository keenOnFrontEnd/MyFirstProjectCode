import { faArrowAltCircleRight, faArrowCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = ({ totalUsersCount, pageSize, currentPage = 1, onPageChange, portionSize = 5 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator_wrapper}>
        <div className={s.main_wrapper}>
       
                {
                    portionNumber &&
                    <label className={s.custom_button}>
                         <FontAwesomeIcon className={s.icon} icon={faArrowLeft} />
                        <button disabled={portionNumber > 1 ? false : true} onClick={() => { setPortionNumber(portionNumber - 1) }}></button>
                    </label>
                }
            
            <div className={s.pages}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {

                        return <span className={`${s.span} ${currentPage === p ? s.active : "" } `}
                            onClick={(e) => { onPageChange(p); }}
                            key={p}
                        >{p}</span>

                    })}
            </div>
            
            {
                 portionNumber && 
                <label className={s.custom_button}>
                <FontAwesomeIcon className={s.icon} icon={faArrowRight} />
                <button disabled={ portionCount > portionNumber ? false : true}onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>
                </label>
            }
        </div>
    </div>

}

export default Paginator;