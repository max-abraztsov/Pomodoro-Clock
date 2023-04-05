import React from 'react';
import MyModal from './UI/modal/MyModal';
import MyInput from './UI/input/MyInput';

// Modal with all settings
const Settings = ({settings, modal, setModal, getFocus, getShort, getLong}) => {
    return (
        <div>
            <MyModal
                visible={modal}
                setVisible={setModal}>
                <div className="settings__items-inputs">
                    <h3>Time (minutes)</h3>
                    <p>Pomodoro:</p>
                    <MyInput 
                        value={settings.focus} 
                        getValue={getFocus}
                        type="number"/> 
                    <p>Short Break:</p>
                    <MyInput 
                        value={settings.short} 
                        getValue={getShort}
                        type="number"/>
                    <p>Long Break:</p>
                    <MyInput 
                        value={settings.long} 
                        getValue={getLong}
                        type="number"/>
                </div>
            </MyModal>
        </div>
    );
};

export default Settings;