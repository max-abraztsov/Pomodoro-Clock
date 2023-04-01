import React from 'react';
import classes from "./ButtonAdd.module.css";


const ButtonAdd = ({children, action, editor}) => {

    let toggleClassCheck = editor ? "activeEditor" : "";
    console.log(toggleClassCheck);

    return (
        <button onClick={action} className={[classes.task__button_add, toggleClassCheck].join(" ")}>
            <span className={classes.task__button_add_inner}>{children}</span>
        </button>
    );
};

export default ButtonAdd;