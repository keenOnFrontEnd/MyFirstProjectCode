import React from 'react';
import { connect } from "react-redux";

import photo from '../../../src/files/photos/user_icon.jpg';


const friendsListChanger = (props) => {

    let friends = [props.users];
    let new_friends = friends.filter(element => element.followed = true)
return new_friends;
}
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}
export default connect(mapStateToProps, {})(friendsListChanger)