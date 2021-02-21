import React from 'react';
import s from './Message.module.css' ;


const Message = ({text, time}) => {
    return (<div className={s.new}>
        <div className={s.newText}>{text}</div>
    <div className={s.time}>{time}</div>

    </div>)
}

export default Message;