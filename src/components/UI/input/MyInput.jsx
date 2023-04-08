import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({getValue, value, id, type, placeholder}) => {
    
    return (
        <input 
            value={value}
            id={id}
            type={type}
            placeholder={placeholder}
            className={classes.myInput} 
            onChange={getValue}
        />
    );
};

export default MyInput;