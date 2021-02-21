import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { CreateForm, CustomTextField, DisabledDiv, Input } from '../../files/common/formsControls/FormsControls';
import { LoginThunk, LogoutThunk } from '../../redux/authReducer';
import { requiredField } from '../../utils/validators/validators';
import style from './Login.module.css';

//<div className={style.rememberMe}>{CreateForm(null, "rememberMe", "input", [], { type: "checkbox" }, 'remember me')}</div>
const LoginForm = ({ handleSubmit, error }) => {

    return (
        <div className={`${style.form}`}>
            <form onSubmit={handleSubmit}>
                <div className={style.email}>{CreateForm("Email", "email", Input, [requiredField], )}</div>
                <div className={style.password}>{CreateForm("Password", "password", Input, [requiredField], { type: "password" }, )}</div>
               
                {error && <div className={style.formError}>
                    {error}
                </div>
                }
                <Field component={DisabledDiv} validate={[requiredField]} ><button >Login</button></Field>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)


const Login = ({ isAuth, userID, LoginThunk, }) => {

    let logIn = (formData) => {
        LoginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to={`/profile/${userID}`} />
    }

    return (
        <div className={style.box}>
            <LoginReduxForm onSubmit={logIn} />
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        userID: state.auth.userID,
        isAuth: state.auth.isAuth
    }
}
const LoginContainer = connect(mapStateToProps, { LoginThunk })(Login)

export default LoginContainer;
