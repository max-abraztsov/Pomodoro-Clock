import React from 'react';
import Icon from "../assets/icon.svg";

const Task = ({task}) => {
    return (
        <div className="task">
            <label className="task__label">
                <input id="checkbox-done" type="checkbox" />
                <span className="task__custom-checkbox"></span>
                <div className="task__text">
                    <h3 className="task__title">{task.title}</h3>
                    <p className="task__note">{task.note}</p>
                </div>
            </label>
            <img className="task__image" src={Icon}/>
        </div>
    );
};

export default Task;