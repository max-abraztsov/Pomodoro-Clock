import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({getValue, value, id, type, placeholder}) => {
    return (
        <input className={classes.myInput} 
        id={id} 
        type={type} 
        value={value} 
        onChange={getValue}
        placeholder={placeholder}
        />
    );
};

export default MyInput;