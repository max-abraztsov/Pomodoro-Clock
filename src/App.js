import React, { useState } from "react";
import "./styles/style.css";
import AllTimers from "./components/AllTimers";
import Settings from "./components/Settings";
import SimpleButton from "./components/UI/simpleButton/SimpleButton";

function App() {
  // User time settings
  const [timeSettings, setTimeSettings] = useState({focus: 25, short: 5, long: 10}); 
  // State of modal with settings
  const [visible, setVisible] = useState(false);

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
    </div>
  );
}

export default App;
