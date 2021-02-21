import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import photo from '../../../src/files/photos/user_icon.jpg'
import { friendsThunk } from '../../redux/users-reducer';
import OnlineFriends from './OnlineFriends/OnlineFriends';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
}
toggleClass = () => {
  const currentState = this.state.active;
  this.setState({ active: !currentState });
};

  friendsList = () => {

    let { followed_users, isAuth } = this.props;

    return followed_users.map(friend => <OnlineFriends key={friend.id} id={friend.id} photo={friend.photos.small || photo} name={friend.name} />)
  }
  render() {

    return (
      <nav className={`${s.nav} ${this.props.isAuth ? "" : s.hidden} ${this.state.active ? s.nav_active : ""}`}>
        <label className={s.menu_btn}><button  onClick={this.toggleClass}></button>Menu</label>
        <img  className={s.logo} src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png' />
        <div className={s.highBox}>
          <div className={s.box}>
            <div className={s.item}>
              <NavLink to="/profile" className={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="/dialogs" className={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="/news" className={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="/music" className={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="/settings" className={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="/users" className={s.active}>Users</NavLink>
            </div>
          </div>
          <div className={s.friends}>
            <div className={s.text}>Online now</div>
            {this.friendsList()}
          </div>

        </div>
      </nav>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    followed_users: state.usersPage.friendslist,
    isAuth: state.auth.isAuth
  }
}
export const connectedNavbar = connect(mapStateToProps, { friendsThunk })(Navbar);
