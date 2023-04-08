import React from 'react';

const Information = () => {
    return (
        <section className="information__section">
            <h2>Increase your productivity with an online Pomodoro Clock!</h2><br/>
            <h3 className='information__title'> What is Pomodoro Clock?</h3>
            <p className='information__text'>Pomodoro Clock is a browser-based Pomodoro Timer that can be customized to suit your needs.
                You can use Pomofocus on both desktop and mobile browsers and adjust the settings to your liking.
                Pomodoro Clock is designed to assist you in concentrating on any task, whether it's studying, writing, or coding. 
                Pomodoro Clock is based on the Pomodoro Technique, a time management approach developed by Francesco Cirillo.
            </p>
            <h3 className='information__title'> What is Pomodoro Technique?</h3>
            <p className='information__text'>Francesco Cirillo developed the Pomodoro Technique as a means of enhancing productivity when working and studying.
                The Pomodoro Technique employs a timer to divide work into periods, typically lasting 25 minutes, separated by brief pauses.
                Each work period is referred to as a pomodoro, which is derived from the Italian term for "tomato," after the tomato-shaped kitchen 
                timer that Cirillo utilized when he was a student.
            </p>
            <h3 className='information__title'>How to use the Pomodoro Clock?</h3>
            <p className='information__text'>To use the Pomodoro Clock, follow these instructions:</p>
            <ul>
                <li>Include the tasks you want to work on today </li>
                <li>Determine how many pomodoros, which are equivalent to 25-minutes of work, are required for each task</li>
                <li>Choose a task to focus on </li>
                <li>Begin the timer and concentrate on the task for 25 minutes </li>
                <li>Take a 5-minute break when the alarm goes off </li>
                <li>Repeat this process 3-5 times until all the tasks are completed </li>
            </ul>
            <h3 className='information__title'>Features</h3>
            <ul>
                <li>Obtaining an estimate of the time required to finish your daily tasks.</li>
                <li>Personalizing your focus/break time, alarm and background sounds, and other settings.</li>
            </ul>
        </section>
    );
};

export default Information;