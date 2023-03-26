import React, {useState, useEffect} from 'react';
import Clock from './Clock';
import MyButton from './UI/button/MyButton';


const Timer = ({setting, id}) => {
    // Residual time
    const [time, setTime] = useState({
        minutes: setting,
        seconds: 0,
    });

    // State of button "Start/Pause"
    const [buttonState, setButtonState] = useState({
        state: false,
        text: "START",
    });

    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        setTime({...time, minutes: setting});
    }, [setting])
    
    // Logic for calculating residual time 
    useEffect(() => {
        let intervalId = null;
        const countDownDate = Date.now() + (time.minutes * 60 * 1000) + (time.seconds * 1000);
        if(buttonState.state){
        intervalId = setInterval(() => {
            const distanse = countDownDate - Date.now();
            setTime({...time,
            minutes: Math.floor( distanse / (60*1000)),
            seconds: Math.floor( distanse % (60*1000) / 1000),
            })
            setTimerId(intervalId);
        }, 1000);
        } else clearInterval(timerId);
    }, [buttonState])
    
    // Toggle function for button "Start/Pause"
    function toggleStateOfButton(e){
        e.preventDefault();
        if (!buttonState.state) setButtonState({...buttonState, state: true, text: "PAUSE"});
        else setButtonState({...buttonState, state: false, text: "START"});
    }

    return (
        <div id={id} className='timerBlock'>
            <Clock minutes={time.minutes} seconds={time.seconds}/>
            <MyButton action={toggleStateOfButton}>{buttonState.text}</MyButton>
        </div>
    );
};

export default Timer;