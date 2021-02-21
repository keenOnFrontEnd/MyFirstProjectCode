import React from 'react';
import { Field } from 'redux-form';
import s from './FormsControls.module.css';
import './FormsControl.css';

export const FormControl = ({input,meta: {touched, error},children,}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const DisabledDiv = ({ input, meta:{touched, error}, ...props }) => {
    const disabled = touched && error;
    return (
        <div  {...props}>

        </div>
    )
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const CreateForm = (placeholder, name, component, validators, props = {}, text = "",) => (

    <div>
        <Field placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            className = "text_form"
{...props}/>{text}
    </div>
)
