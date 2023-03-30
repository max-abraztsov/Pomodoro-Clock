import React from 'react';
import classes from "./ButtonAdd.module.css";

const ButtonAdd = ({children}) => {
    return (
        <button className={classes.task__button_add}>
            <span  className={classes.task__button_add_inner}>{children}</span>
        </button>
    );
};

export default ButtonAdd;