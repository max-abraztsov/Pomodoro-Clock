import React, { useState, useEffect } from "react";
import MyInput from "./components/UI/input/MyInput";
import Timer from "./components/Timer";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [timeSettings, setTimeSettings] = useState({
    focus: 25,
    short: 5,
    long: 10,
  }) 

  const [time, setTime] = useState({
    minutes: 25,
    seconds: 0,
  });

  const [buttonState, setButtonState] = useState(false);

  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    let intervalId = null;
    const countDownDate = Date.now() + (time.minutes * 60 * 1000) + (time.seconds * 1000);
    if(buttonState){
      intervalId = setInterval(() => {
        const distanse = countDownDate - Date.now();
        setTime({...time,
          minutes: Math.floor( distanse / (60*1000)),
          seconds: Math.floor( distanse % (60*1000) / 1000),
        })
        console.log(intervalId);
        setTimerId(intervalId);
      }, 1000);
    } else {
      console.log(timerId);
      clearInterval(timerId);
    }
  }, [buttonState])

  

  // function toggleStateOfButton(e){
  //   e.preventDefault();
  //   if (buttonState.state === false){
  //     setButtonState({...buttonState, state: true, text: "Pause"});
      
  //     startTime();
      
  //   } else if (buttonState.state === true) {
  //     setButtonState({...buttonState, state: false, text: "Start"});
      
  //   } 
  // }

  // function startTime(){
    
  //   const countDownDate = Date.now() + (time.minutes * 60 * 1000) + (time.seconds * 1000);
  //   const timer = setInterval(() => {
      
  //     if(buttonState.state){
       
  //       const distanse = countDownDate - Date.now();
  //       setTime({...time,
  //         minutes: Math.floor( distanse / (60*1000)),
  //         seconds: Math.floor( distanse % (60*1000) / (1000)),
  //       })
  //       if (distanse <= 1000){
  //         clearInterval(timer);
  //       }
  //     } else {
        
  //       clearInterval(timer);
  //     }
  //   }, 1000)
  // }

  function getTime(e){
    setTimeSettings({...timeSettings, focus: e.target.value});
    setTime({...time, minutes: e.target.value});
  }

  return (
    <div className="App">
      <MyInput value={timeSettings.focus} getTime={getTime}/>
      <Timer minutes={time.minutes} seconds={time.seconds}/>
      <MyButton action={() => setButtonState(true)}>Start</MyButton>
      <MyButton action={() => setButtonState(false)}>Pause</MyButton>
    </div>
  );
}

export default App;
