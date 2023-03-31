import React, { useState } from "react";
import "./styles/style.css";
import AllTimers from "./components/AllTimers";
import Settings from "./components/Settings";
import SimpleButton from "./components/UI/simpleButton/SimpleButton";
import Task from "./components/Task";
import ButtonAdd from "./components/UI/button-add/ButtonAdd";
import MyInput from "./components/UI/input/MyInput";
import Editor from "./components/Editor";

function App() {
  // User time settings
  const [timeSettings, setTimeSettings] = useState({focus: 25, short: 5, long: 10}); 
  // State of modal with settings
  const [visible, setVisible] = useState(false);

  const [tasks, setTasks] = useState([
    {state: false, title: "Pallet project", note: "Rewrite the code written in the project 'test-react'"},
    {state: false, title: "Kanban", note: "Find a project with a kanban board and redo it"},
  ]);

  const [editor, setEditor] = useState(false);

  function openEditor(){
    setEditor(true)
    if(editor){
      
    }
  }

  return (
    <div className="App">
      <SimpleButton action={() => setVisible(true)}>Settings</SimpleButton>
      <Settings 
        settings={timeSettings} 
        modal={visible}
        setModal={setVisible}
        getFocus={(e) => setTimeSettings({...timeSettings, focus : e.target.value})}
        getShort={(e) => setTimeSettings({...timeSettings, short : e.target.value})}
        getLong={(e) => setTimeSettings({...timeSettings, long : e.target.value})}
      ></Settings>
      <AllTimers settings={timeSettings}/>

      <h2 className="tasks__title" >Your tasks:</h2>
      {tasks.map( task => <Task task={task}/> )}
      <ButtonAdd onClick={openEditor}>Add task</ButtonAdd>
      <Editor deleteButton={true}/>

   </div>   
  );
}

export default App;
