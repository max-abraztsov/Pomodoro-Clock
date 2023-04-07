import React, { useState } from "react";
import "../styles/style.css";
import AllTimers from "../components/AllTimers";
import Settings from "../components/Settings";
import SimpleButton from "../components/UI/simpleButton/SimpleButton";
import Tasks from "../components/Tasks";


const Pomodoro = () => {
    // User time settings
  const [timeSettings, setTimeSettings] = useState({focus: 1, short: 5, long: 10}); 
  // State of modal with settings
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <section className="timer__section">
        <Settings 
          settings={timeSettings} 
          modal={visible}
          setModal={setVisible}
          getFocus={(e) => e.target.value > 0 ? setTimeSettings({...timeSettings, focus : e.target.value}) : ""}
          getShort={(e) => e.target.value > 0 ? setTimeSettings({...timeSettings, short : e.target.value}) : ""}
          getLong={(e) => e.target.value > 0 ? setTimeSettings({...timeSettings, long : e.target.value}) : ""}
        ></Settings>
        <SimpleButton action={() => setVisible(true)}>Settings</SimpleButton>
        <AllTimers settings={timeSettings}/>
        <Tasks/>
      </section>
      
   </div>   
  );
};

export default Pomodoro;