import React from 'react';
import Messagealfa from './NewMassege';
import { ActDialogReduxForm } from './ActDialogForm';
import s from './ActDialog.module.css';
import userEvent from '@testing-library/user-event';
import userLogo from './../../../files/photos/user_icon.jpg';



const ActDialog = ({ SendMessage, messagesData,user }) => {
  console.log(messagesData)
  let AddMessage = (values) => {
    SendMessage(values.newMessageBody)
  }
  Text = React.createRef();

  let messages = messagesData.map(m => <Messagealfa text={m.message} time={m.time} id={m.id} />);
  return (

    <div className={s.main_wrapper}>
      <div className={s.dialog_info_wrapper}>
        <section> 
          <img src={null}/>
          <div>{null}</div>
        </section>
      </div>
      <div className={s.dialog_messages_wrapper}>{messages}</div>
      <div className={s.dialog_form_wrapper}><ActDialogReduxForm messages={messages} onSubmit={AddMessage} /></div>
    </div>
  )
}

export default ActDialog;
