import React from 'react';
import './validators.css'


export const requiredField = (value) => {

    if(value) return undefined;

    return <div className="validator_div">Field is required</div>;
    
}

export const maxLenghtCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined;  
}
