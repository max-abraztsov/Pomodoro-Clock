import React from 'react';
import MyInput from './UI/input/MyInput';
import SimpleButton from './UI/simpleButton/SimpleButton';

const Editor = ({deleteButton}) => {

    const button = "";

    if (deleteButton) {
        const button = <SimpleButton>Delete</SimpleButton>;
    }


    return (
        <div class="editor__block">
        <MyInput 
          // value={settings.short} 
          // getTime={getShort}
          type="text" placeholder="Enter your task..."/>
        <MyInput 
          // value={settings.short} 
          // getTime={getShort}
          type="text" placeholder="Note..."/>
        <div class="editor__buttons-block">
            {button}
            
            <div>
                <SimpleButton>Cancel</SimpleButton>
                <SimpleButton>Save</SimpleButton>
            </div>
          
        </div>
      </div>
    );
};

export default Editor;