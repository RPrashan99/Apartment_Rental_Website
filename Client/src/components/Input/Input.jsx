import React from 'react'
import InputContainer from '../Inputcontainer/InputContainer';
import classes from './input.module.css'

function Input(
    {label, type, defaultValue, onChange, onBlur, name, error},
    ref
) {

    const getErrorMessage = () => {
        if (!error) return;
        if(error.message) return error.message;
        //defaults
        switch (error.type) {
            case 'required':
                return 'This field is required';
            case 'minLength':
                return 'The field is too short';
            default:
                return '*';
        }
    };

  return (
    <InputContainer label={label}>
        <input
        defaultValue={defaultValue}
        className={classes.input}
        type={type}
        placeholder={label}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
    />
    {error && <div className={classes.error}>{getErrorMessage()}</div>}
    </InputContainer>
  )
}

export default React.forwardRef(Input);
