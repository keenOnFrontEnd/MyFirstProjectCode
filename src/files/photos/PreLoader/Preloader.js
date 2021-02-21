import React from 'react';
import preLoad from '../preLoad.svg';
import style from './preloader.module.css';
import preloadGif from './89 (3).png';

const PreLoader = () => {
    return <div className={style.box}>
    <div className={style.boxy}> <img src={preloadGif} /> </div>
    </div>
};

export default PreLoader;
