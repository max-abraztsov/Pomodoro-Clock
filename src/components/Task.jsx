import React, { useState } from 'react';
import Icon from "../assets/icon.svg";
import MyCheckbox from './UI/checkbox/MyCheckbox';
import Editor from './Editor';

const Task = ({task, savefunc, deletefunc}) => {

    const [editor, setEditor] = useState(true);

    function handleClick(){
        setEditor(editor => !editor);
    }
    
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
                <img 
                    className="task__image" 
                    onClick={handleClick} 
                    src={Icon} 
                    alt="three dots settings"/>
            </div>
            <Editor 
                editor={editor} 
                deleteButton={true} 
                closeEditor={handleClick} 
                savefunc={savefunc}
                deletefunc={deletefunc} 
                task={task}/>
        </div>
    );
};

export default Task;