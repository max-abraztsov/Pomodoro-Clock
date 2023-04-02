import React, { useState } from 'react';
import Icon from "../assets/icon.svg";
import MyCheckbox from './UI/checkbox/MyCheckbox';
import Editor from './Editor';

const Task = ({task, action, savefunc}) => {

    const [editor, setEditor] = useState(true);
    
    return (
        <div>
            <div className="task">
                <label className="task__label">
                    <MyCheckbox/>
                    <div className="task__text">
                        <h3 className="task__title">{task.title}</h3>
                        <p className="task__note">{task.note}</p>
                    </div>
                </label>
                <img className="task__image" onClick={() => setEditor(editor => !editor)} src={Icon} alt="three dots settings"/>
            </div>
            <Editor editor={editor} deleteButton={true} savefunc={savefunc} task={task}/>
        </div>
    );
};

export default Task;