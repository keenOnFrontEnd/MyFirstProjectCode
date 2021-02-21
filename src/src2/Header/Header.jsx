import React from 'react';
import { NavLink, Redirect, Route, useHistory } from 'react-router-dom';
import s from './Header.module.css';


const Header = ({ isAuth, login, LogoutThunk }) => {
    
    let history = useHistory();

    async function logout() {
        await LogoutThunk();
        history.push("/login")
    }
    return (
        <header>
            <div className={s.loginBlock}>
                {isAuth ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}></NavLink>
                }
            </div>
        </header>
    );
};


export default Header;