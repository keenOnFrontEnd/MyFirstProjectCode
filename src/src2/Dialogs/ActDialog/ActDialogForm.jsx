import React from 'react';
import s from './ActDialog.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../files/common/formsControls/FormsControls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


class ActDialog extends React.Component {

    render() {
        const { handleSubmit, messages } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className={s.form_wrapper}>
                    <Field className={s.area}
                        name={'newMessageBody'} component={Textarea} className={s.field} />
                </div>
                <label className={s.custom_button}>
                    <button className={s.button}>SEND</button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </label>
            </form>
        )
    }
}

export const ActDialogReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(ActDialog)

