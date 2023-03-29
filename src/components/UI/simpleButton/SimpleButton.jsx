import React from 'react';
import classes from "./SimpleButton.module.css";

const SimpleButton = ({children, action}) => {
    return (
        <div className={classes.buttonBlock}>
            <button className={classes.myButton} onClick={action}>
                {children}
            </button>
            
        </div>
    );
};

export default SimpleButton;