import React from 'react';
import { SendMessage, updateActDialogAC } from '../../../redux/dialogs-reducer';
import ActDialog from './ActDialog';
import { connect } from 'react-redux';


class ActDialogClass extends React.Component {

    render() {
        const {messagesData, actDialogID, SendMessage, updateActDialogAC, users} = this.props;
        return <>
        <ActDialog
        messagesData = {messagesData}
        actDialogID = {actDialogID}
        SendMessage = {SendMessage}
        updateActDialogAC = {updateActDialogAC}
        users = {users}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        actDialogID: state.dialogsPage.actDialogID,
        users: state.usersPage.friendslist
    }
}
const ActDialogContainer = connect(mapStateToProps,{SendMessage, updateActDialogAC})(ActDialogClass);

export default ActDialogContainer;
