import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, action}) => {
    return (
        <div className={classes.buttonBlock}>
            <button className={classes.myButton} onClick={action}>
                {children}
            </button>
            <div className={classes.buttonBackground}></div>
        </div>
    );
};

export default MyButton;