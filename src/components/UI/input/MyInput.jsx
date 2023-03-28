import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({getTime, value, id}) => {
    return (
        <input className={classes.myInput} id={id} type="number"  value={value} onChange={getTime} />
    );
};

export default MyInput;