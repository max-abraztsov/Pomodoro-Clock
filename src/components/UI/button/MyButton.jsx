import React from 'react';

const MyButton = ({children, action}) => {
    return (
        <button onClick={action}>
            {children}
        </button>
    );
};

export default MyButton;