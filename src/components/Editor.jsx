import React, { useState, useEffect } from 'react';
import MyInput from './UI/input/MyInput';
import SimpleButton from './UI/simpleButton/SimpleButton';

const Editor = ({deleteButton, closeEditor, task, editor, cancelfunc, savefunc, deletefunc}) => {

    function addButton (){
        if (deleteButton) {
            return (<SimpleButton action={deleteTask}>Delete</SimpleButton>);
        }
    } 

    useEffect(() => {
        if (task) setNewTask(task);
        else setNewTask({title: "", note: ""});  
    }, []);

    let toggleClassCheck = editor ? "" : "activeEditor";

    const [newTask, setNewTask] = useState({
        title: "",
        note: "", 
    })

    function saveTransmissionTask(){
        const taskForAdd = { 
            id: Date.now(), 
            state: false, 
            title: newTask.title, 
            note: newTask.note
        }
        if (task) {
            taskForAdd.id = newTask.id;
            savefunc(taskForAdd);
            closeEditor();
        } else {
            savefunc(taskForAdd);
            setNewTask({ title: "", note: ""});  
        }   
    }

    function cancelCreateTask(){
        if (task) {
            savefunc(task);
            setNewTask(task);
            closeEditor();
        } else {
            cancelfunc();
            setNewTask({ title: "", note: ""}); 
        }     
    }

    function deleteTask(){
        deletefunc(task);
        closeEditor();
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
                        <SimpleButton action={cancelCreateTask}>Cancel</SimpleButton>
                        <SimpleButton action={saveTransmissionTask}>Save</SimpleButton>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Editor;