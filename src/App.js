import React from 'react';
import './App.css';
import { Route, HashRouter, withRouter, BrowserRouter, Redirect } from 'react-router-dom';
import News from './src2/News/News';
import Music from './src2/Music/Music';
import Settings from './src2/Settings/Settings';
import NavbarContainer from './src2/Navigation/NavbarContainer';
import UsersContainer from './src2/Users/UsersContainer';
import HeaderContainer from './src2/Header/HeaferContainer';
import LoginContainer from './src2/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import PreLoader from './files/photos/PreLoader/Preloader';
import store from './redux/redux-store';
import { WithSuspence } from './hoc/withSuspence';
import { friendsThunk } from './redux/users-reducer';

let ProfileContainerApi = React.lazy(() => import('./src2/Profile/ProfileContainer'))
let DialogContainer = React.lazy(() => import('./src2/Dialogs/DialogContainer'))



class App extends React.Component {


  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    this.props.friendsThunk()
    if (!this.props.initialized) {
      return <PreLoader />
    }
    if (!this.props.isAuth) {
      return <LoginContainer />
    } else {
      return (
        <div className={`app-wrapper`}>
          <Route
            exact
            path="/"
            render={() => {
              return (
                this.props.isAuth ?
                  <Redirect to='/profile/' />
                  : <Redirect to="/login" />
              )
            }}
          />
          
         <NavbarContainer />
         <div className="main-wrapper-app"> <HeaderContainer />
          <div className={`app-wrapper-content`}>

            <Route path='/Dialogs'
              render={WithSuspence(DialogContainer)} />

            <Route path='/Profile/:userID?'
              render={WithSuspence(ProfileContainerApi)} />

            <Route path='/News' component={News} />
            <Route path='/Music' component={Music} />
            <Route path='/Settings' component={Settings} />

            <Route path='/Users'
              render={() => <UsersContainer />} />
            <Route path='/login'
              render={() => <LoginContainer />} />

          </div>
        </div>
        </div>
      );
    }
  };
}


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, friendsThunk }))(App);

export const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

