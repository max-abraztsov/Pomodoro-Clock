import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({getTime, value, id, type}) => {
    return (
        <input className={classes.myInput} id={id} type={type} value={value} onChange={getTime}/>
    );
};

export default MyInput;