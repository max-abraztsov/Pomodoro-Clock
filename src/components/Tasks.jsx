import React, {useState} from 'react';
import Editor from './Editor';
import Task from './Task';
import ButtonAdd from './UI/button-add/ButtonAdd';

const Tasks = () => {

    const [tasks, setTasks] = useState([
        {id: 1680363507841, state: false, title: "Complete the header", note: ""},
        {id: 1680363507842, state: false, title: "Make an animation for button", note: ""},
        {id: 1680363507843, state: false, title: "Finalize responsive design", note: "For clock elements and for tabs"},
    ]);

    const [editor, setEditor] = useState(true);

    function handleClick(){
        setEditor(editor => !editor);
    }

    function saveEditorButtonRedact(newTask){
        tasks.forEach( (task, index) => {
            if(task.id === newTask.id){
                setTasks([...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)]);  
            }
        });
    }

    function deleteEditorButtonRedact(taskToDelete){
        setTasks(tasks.filter(task => task.id !== taskToDelete.id));
    }

    function cancelEditorButton(){
        setEditor(true);
    }

    function saveEditorButtonAdd(newTask){
        setTasks([...tasks, newTask]);
        setEditor(true);
    }

    return (
        <div>
           <h2 className="tasks__title" >Your tasks:</h2>
            {tasks.map( task => <Task 
            key={task.id} 
            task={task} 
            savefunc={saveEditorButtonRedact}
            deletefunc={deleteEditorButtonRedact}
            /> )}
            <Editor 
                editor={editor} 
                cancelfunc={cancelEditorButton}
                savefunc={saveEditorButtonAdd}
                deleteButton={false}/>
            <ButtonAdd editor={editor} action={handleClick}>Add task</ButtonAdd> 
        </div>
    );
};

export default Tasks;