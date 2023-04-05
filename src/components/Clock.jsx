import React from 'react';

const Clock = ({minutes, seconds}) => {

    // Adding zero for single-digit numbers
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds; 

    return (
        <div className='clock'>
            <span className="clock__minutes">{minutes}</span>
            <span className="clock__dots">:</span>
            <span className="clock__seconds">{seconds}</span>
        </div>
    );
};

export default Clock;