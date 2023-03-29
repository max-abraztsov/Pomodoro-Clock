import React from 'react';

const Clock = ({minutes, seconds}) => {

    // Adding zero for single-digit numbers
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds; 

    return (
        <div className='clock'>
            {minutes}:{seconds}
        </div>
    );
};

export default Clock;