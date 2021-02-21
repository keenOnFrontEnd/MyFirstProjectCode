import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../files/photos/user_icon.jpg'
import s from './Users.module.css';



const User = ({user,followingInProgress,unfollow,follow,}) => {

    let variant = followingInProgress.some(id => id === user.id);

    return <div className={s.main_wrapper}>
            <span className= {s.main_photo}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.img}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?<label className={`${s.buttons} ${s.unfollow} ${variant ? s.in_progress_buttons : " "}`}><button disabled={variant}
                            onClick={() => {
                                unfollow(user.id);
                            }}></button> Unfollow</label>
                        : <label className={`${s.buttons} ${variant ? s.in_progress_buttons : " "}`}><button disabled={variant}
                            onClick={() => {
                                follow(user.id);
                               
                            }}></button> Follow</label>}

                </div>
            </span>
                <span className={s.main_info}>
                    <div>{user.name}</div>
                    
                </span>

        </div>
}

export default User;