import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, visible, setVisible}) => {

    // Array of classes for modal 
    const rootClasses = [classes.myModal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div 
                className={classes.myModalClose} 
                onClick={() => {setVisible(false)}}
                >Close</div>
                {children}
            </div>
        </div>
    );
};

export default MyModal;