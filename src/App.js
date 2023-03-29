import React, { useState, useRef } from "react";
import "./styles/style.css";
import AllTimers from "./components/AllTimers";
import Settings from "./components/Settings";
import SimpleButton from "./components/UI/simpleButton/SimpleButton";

function App() {
  // User time settings
  const [timeSettings, setTimeSettings] = useState({focus: 25, short: 5, long: 10}); 
  // State of modal with settings
  const [visible, setVisible] = useState(false);

  const [tasks, setTasks] = useState([
    {state: false, title: "Pallet project", note: "Rewrite the code written in the project 'test-react'"},
    {state: false, title: "Kanban", note: "Find a project with a kanban board and redo it"},
  ]);

  const inputref = useRef();

  console.log(inputref.current);

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
      <div className="task">
        <input type="checkbox" ref={inputref} />
        <div className="task__text">
          <h3 className="task__title">{tasks[0].title}</h3>
          <p className="task__note">{tasks[0].note}</p>
          <span className="material-symbols-outlined">
          more_vert
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
