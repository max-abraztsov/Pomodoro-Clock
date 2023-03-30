import React from 'react';
import classes from "./MyCheckbox.module.css";

const MyCheckbox = () => {
    return (
        <div>
            <input id={classes.checkbox_done} type="checkbox" />
            <span className={classes.task__custom_checkbox}></span>
        </div>
    );
};

export default MyCheckbox;