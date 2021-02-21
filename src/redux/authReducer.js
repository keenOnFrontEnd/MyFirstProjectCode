import React from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { stopSubmit } from "redux-form";
import { Login_API } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initilialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initilialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userID: action.userID,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }

        default:
            return state;

    }
};

export const setAuthUserData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, userID, email, login, isAuth })
export const setLoginUser = (userID) => ({ type: SET_USER_DATA, data: userID })

export const Auth = () => async (dispatch) => {
   
    let responce = await Login_API.me()
    if (responce.data.resultCode === 0) {
        let { email, id, login } = responce.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {
    let responce = await Login_API.login(email, password, rememberMe)
    if (responce.data.resultCode === 0) {
        dispatch(Auth())
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some Error';
        dispatch(stopSubmit("loginForm", { _error: message }))
    }
}

export const LogoutThunk = () => async (dispatch) => {
    let responce = await Login_API.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;
