import React from 'react';
import MyInput from './UI/input/MyInput';
import SimpleButton from './UI/simpleButton/SimpleButton';

const Editor = ({deleteButton, editor, cancelfunc, savefunc, deletefunc}) => {

    function addButton (){
        if (deleteButton) {
            return (<SimpleButton action={deletefunc}>Delete</SimpleButton>);
        }
    }

    let toggleClassCheck = editor ? "" : "activeEditor";
    
    return (
        <div className={["editor", toggleClassCheck].join(" ")}>
            <div className="editor__block">
                <MyInput 
                // value={settings.short} 
                // getTime={getShort}
                type="text" placeholder="Enter your task..."/>
                <MyInput 
                // value={settings.short} 
                // getTime={getShort}
                type="text" placeholder="Note..."/>
                <div className="editor__buttons-block">
                    {addButton()}
                    
                    <div>
                        <SimpleButton action={cancelfunc}>Cancel</SimpleButton>
                        <SimpleButton action={savefunc}>Save</SimpleButton>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Editor;