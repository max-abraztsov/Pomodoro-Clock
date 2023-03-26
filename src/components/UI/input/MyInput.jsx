import React from 'react';

const MyInput = ({getTime, value, id}) => {
    return (
        <input id={id} type="number"  value={value} onChange={getTime} />
    );
};

export default MyInput;