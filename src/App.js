import React, { useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import Timer from "./components/Timer";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [time, setTime] = useState({
    minutes: 25,
    seconds: "0",
  });

  function startTime(e){
    e.preventDefault();
    const countDownDate = Date.now() + time.minutes * 60 * 1000;
    const timer = setInterval(() => {
      const distanse = countDownDate - Date.now();
      setTime({...time,
        minutes: Math.floor( distanse / (60*1000)),
        seconds: Math.floor( distanse % (60*1000) / (1000)),
      })
      if (distanse <= 1000){
        clearInterval(timer);
      }
    }, 1000)
  }

  return (
    <div className="App">
      <MyInput value={time.minutes} getTime={e => setTime({...time, minutes: e.target.value})}/>
      <Timer minutes={time.minutes} seconds={time.seconds}/>
      <MyButton action={startTime}>Start</MyButton>
    </div>
  );
}

export default App;
