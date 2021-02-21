import React from 'react';
import s from './../Navigation.module.css';
import PreLoader from '../../../files/photos/PreLoader/Preloader';
import { NavLink } from 'react-router-dom';


const OnlineFriends = ({ id, photo, name}) => {
    return <box key={id} id={id} className={s.friend}>
       <div className={s.img_div}> <NavLink to={'/profile/' + id}><img src={photo}/></NavLink>
       {name}
      
       </div>
        </box>
    
}
export default OnlineFriends;