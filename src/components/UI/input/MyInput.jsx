import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => { //getValue, value, id, type, placeholder
    return (
        <input {...props} 
            className={classes.myInput} 
            onChange={props.getValue}
        />
    );
};

export default MyInput;