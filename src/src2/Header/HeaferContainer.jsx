
import React from 'react';
import Header from './Header';
import { Auth, LogoutThunk, setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';


class HeaderContainer extends React.Component {

    render() {
        const {isAuth, login} = this.props
        return <Header {...this.props} isAuth={isAuth} login={login} />
 
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }

}

export default compose(
    connect(mapStateToProps, {LogoutThunk})
)(HeaderContainer)
