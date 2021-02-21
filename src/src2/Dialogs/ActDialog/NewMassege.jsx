import React from 'react';
import s from './ActDialog.module.css';

const Messagealfa = ({text, time}) => {
    return (<div className={s.new}>
        <div className={s.newText}>{text}</div>
    <div className={s.time}>{time}</div>

    </div>)
}

export default Messagealfa;