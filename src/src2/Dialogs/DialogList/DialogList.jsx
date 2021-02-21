import React from 'react';
import s from './DialogList.module.css';
import DialogItem from './DialogItem/DialogItem';
import { connect } from 'react-redux';


const DialogList = ({users}) => {
    let dialogsElements = users.map( d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    return (
        <div className={s.main_wrapper}>
        <div>
        <div>You don't have any actual dialogs </div>
            {dialogsElements }
        </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth,
        users: state.usersPage.friendslist
    }
};

const DialogListContainer = connect(mapStateToProps)(DialogList);



export default DialogListContainer;
