import React from 'react';
import MyModal from './UI/modal/MyModal';
import MyInput from './UI/input/MyInput';

// Modal with all settings
const Settings = ({settings, modal, setModal, getFocus, getShort, getLong}) => {
    return (
        <div>
            <MyModal
                visible={modal}
                setVisible={setModal}
                >
                <div className="settings__items-inputs">
                    <h3>Time (minutes)</h3>
                    <p>Pomodoro:</p>
                    <MyInput 
                        value={settings.focus} 
                        getTime={getFocus}/>
                    <p>Short Break:</p>
                    <MyInput 
                        value={settings.short} 
                        getTime={getShort}/>
                    <p>Long Break:</p>
                    <MyInput 
                        value={settings.long} 
                        getTime={getLong}/>
                </div>
            </MyModal>
        </div>
    );
};

export default Settings;