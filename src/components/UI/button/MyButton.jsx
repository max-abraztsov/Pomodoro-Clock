import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, action, buttonState}) => {

    let rootClasses = [classes.myButton];

    if (buttonState) rootClasses = [classes.myButton, classes.active];
    else rootClasses = [classes.myButton];

    return (
        <div className={classes.buttonBlock}>
            <button className={rootClasses.join(" ")} onClick={action}>
                {children}
            </button>
            <div className={classes.buttonBackground}></div>
        </div>
    );
};

export default MyButton;