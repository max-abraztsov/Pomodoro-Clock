import React from 'react';
import classes from "./SimpleButton.module.css";

const SimpleButton = ({children, action}) => {
    return (
        <button className={classes.myButton} onClick={action}>
            {children}
        </button>
    );
};

export default SimpleButton;