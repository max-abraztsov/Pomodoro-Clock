import React, {useState, useEffect} from 'react';
import Clock from './Clock';
import MyButton from './UI/button/MyButton';
import clickAudio from "../audio/click.mp3";
import endAlarm from "../audio/alarm.mp3";
import MyModal from './UI/modal/MyModal';


const Timer = ({setting, id}) => {
    // Residual time
    const [time, setTime] = useState({ minutes: setting, seconds: 0,});

    // State of button "Start/Pause"
    const [buttonState, setButtonState] = useState({ state: false, text: "START",});

    const [timerId, setTimerId] = useState(0);

    // State of modal "Time's up!"
    const [modal, setModal] = useState(0);

    useEffect(() => setTime({...time, minutes: setting}), [setting]); 

    // Logic for calculating residual time 
    useEffect(() => {
        let intervalId = null;
        const countDownDate = Date.now() + (time.minutes * 60 * 1000) + (time.seconds * 1000);
        if(buttonState.state){
            intervalId = setInterval(() => { // timer logic
                const distanse = countDownDate - Date.now();
                setTime({...time,
                minutes: Math.floor( distanse / (60*1000)),
                seconds: Math.floor( distanse % (60*1000) / 1000),
                })
                if (distanse <= 0){ // will be triggered when the timer ends
                    clearInterval(intervalId);
                    new Audio(endAlarm).play();
                    setTime({...time, minutes: setting, seconds: 0,});
                    setButtonState({ state: false, text: "START",});
                    setModal(true);
                } else setTimerId(intervalId);
            }, 1000);
        } else clearInterval(timerId);
    }, [buttonState])
    
    // Toggle function for button "Start/Pause"
    function toggleStateOfButton(e){
        e.preventDefault();
        new Audio(clickAudio).play();
        if (!buttonState.state) setButtonState({...buttonState, state: true, text: "PAUSE"});
        else setButtonState({...buttonState, state: false, text: "START"});
    }

    return (
        <div id={id} className='timer'>
            <MyModal visible={modal} setVisible={setModal}>Time's up!</MyModal>
            <Clock minutes={time.minutes} seconds={time.seconds}/>
            <MyButton buttonState={buttonState.state} action={toggleStateOfButton}>{buttonState.text}</MyButton>
        </div>
    );
};

export default Timer;