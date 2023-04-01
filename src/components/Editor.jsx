import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import SimpleButton from './UI/simpleButton/SimpleButton';

const Editor = ({deleteButton, editor, cancelfunc, savefunc, deletefunc}) => {

    function addButton (){
        if (deleteButton) {
            return (<SimpleButton action={deletefunc}>Delete</SimpleButton>);
        }
    }

    let toggleClassCheck = editor ? "" : "activeEditor";


    const [newTask, setNewTask] = useState({
        state: false,
        title: "",
        note: "",
    })

    function transmissionTask(){
        setNewTask({...newTask, id: Date.now()});
        savefunc(newTask);
        setNewTask({state: false, title: "", note: ""});

    }
    
    return (
        <div className={["editor", toggleClassCheck].join(" ")}>
            <div className="editor__block">
                <MyInput 
                    value={newTask.title}
                    getValue={(e) => setNewTask({...newTask, title: e.target.value}) }
                    type="text" 
                    placeholder="Enter your task..."/>
                <MyInput 
                    value={newTask.note}
                    getValue={(e) => setNewTask({...newTask, note: e.target.value})}
                    type="text" 
                    placeholder="Note..."/>
                <div className="editor__buttons-block">
                    {addButton()}
                    
                    <div>
                        <SimpleButton action={cancelfunc}>Cancel</SimpleButton>
                        <SimpleButton action={transmissionTask}>Save</SimpleButton>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Editor;