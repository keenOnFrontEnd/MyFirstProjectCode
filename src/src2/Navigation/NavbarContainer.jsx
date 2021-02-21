import React from 'react';
import OnlineFriends from './OnlineFriends/OnlineFriends';
import { connect } from 'react-redux';
import Navbar, { connectedNavbar } from './Navbar';




let mapToStateProps = (state) => {
  
  let friendsEl = state.navbarPage.online.map(f => <OnlineFriends name={f.name} id={f.id} photo={f.photo} />);

  let OnlineEl = friendsEl;
  return {
    friendsEl: OnlineEl
  }
}



const NavbarContainer = connect(mapToStateProps,{})(connectedNavbar)


export default NavbarContainer;