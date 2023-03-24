import React from 'react';

const MyInput = ({getTime, value}) => {
    return (
        <input type="number"  value={value} onChange={getTime} />
    );
};

export default MyInput;