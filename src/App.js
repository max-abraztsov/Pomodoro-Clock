import React, { useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import Timer from "./components/Timer";
import "./styles/style.css";

function App() {

  // User time settings
  const [timeSettings, setTimeSettings] = useState({
    focus: 25,
    short: 5,
    long: 10,
  }) 

  return (
    <div className="App">
      <MyInput 
        value={timeSettings.focus} 
        getTime={ e => setTimeSettings({...timeSettings, focus: e.target.value}) }/>
      <MyInput 
        value={timeSettings.short} 
        getTime={ e => setTimeSettings({...timeSettings, short: e.target.value}) }/>
      <MyInput 
        value={timeSettings.long} 
        getTime={ e => setTimeSettings({...timeSettings, long: e.target.value}) }/>

      <Timer id="focus" setting={timeSettings.focus} />
      <Timer id="short" setting={timeSettings.short} />
      <Timer id="long" setting={timeSettings.long} />

      
    </div>
  );
}

export default App;































// import React, { useState, useEffect } from "react";
// import MyInput from "./components/UI/input/MyInput";
// import Clock from "./components/Clock";
// import MyButton from "./components/UI/button/MyButton";

// function App() {

//   // User time settings
//   const [timeSettings, setTimeSettings] = useState({
//     focus: 25,
//     short: 5,
//     long: 10,
//   }) 

//   // Residual focus time
//   const [time, setTime] = useState({
//     minutes: 25,
//     seconds: 0,
//   });

//   // State of button "Start/Pause"
//   const [buttonState, setButtonState] = useState({
//     state: false,
//     text: "Start",
//   });

//   const [timerId, setTimerId] = useState(0);

  
//   // Logic for calculating residual time 
//   useEffect(() => {
//     let intervalId = null;
//     const countDownDate = Date.now() + (time.minutes * 60 * 1000) + (time.seconds * 1000);
//     if(buttonState.state){
//       intervalId = setInterval(() => {
//         const distanse = countDownDate - Date.now();
//         setTime({...time,
//           minutes: Math.floor( distanse / (60*1000)),
//           seconds: Math.floor( distanse % (60*1000) / 1000),
//         })
//         setTimerId(intervalId);
//       }, 1000);
//     } else clearInterval(timerId);
//   }, [buttonState])

  
//   // Toggle function for button "Start/Pause"
//   function toggleStateOfButton(e){
//     e.preventDefault();
//     if (!buttonState.state) setButtonState({...buttonState, state: true, text: "Pause"});
//     else setButtonState({...buttonState, state: false, text: "Start"});
//   }

//   // Getting the time from input 
//   function getTime(e){
//     setTimeSettings({...timeSettings, focus: e.target.value});
//     setTime({...time, minutes: e.target.value});
//   }

//   return (
//     <div className="App">
//       <MyInput value={timeSettings.focus} getTime={getTime}/>
//       <Clock minutes={time.minutes} seconds={time.seconds}/>
//       <MyButton action={toggleStateOfButton}>{buttonState.text}</MyButton>
//     </div>
//   );
// }

// export default App;