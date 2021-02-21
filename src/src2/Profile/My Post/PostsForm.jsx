import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../files/common/formsControls/FormsControls';
import {maxLenghtCreator, requiredField } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';

const maxLenght10 = maxLenghtCreator(1000);

class addPostForm extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit} className={s.post_form}>
                <div className={s.new_post_wrapper}>
                    <Field className={s.ta}
                        placeholder='Your new post'
                        component={Textarea}
                        name={'post'} 
                        validate={[requiredField, maxLenght10]}/>
                    <button className={s.b}></button>
                </div>
            </form>
        )
    }
}
export const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(addPostForm)

