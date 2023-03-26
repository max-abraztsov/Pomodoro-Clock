import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Timer from './Timer';


// Realize tree timers and switching between timers types
const AllTimers = ({settings}) => {
    return (
        <div className="tabsAndTimers">
            <Tabs selectedTabClassName="activeTab">
            <TabList className='tabList'>
                <Tab className='tabItem'>Pomodoro</Tab>
                <Tab className='tabItem'>Short Break</Tab>
                <Tab className='tabItem'>Long Break</Tab>
            </TabList>
            <TabPanel>
                <Timer id="focus" setting={settings.focus} />
            </TabPanel>
            <TabPanel>
                <Timer id="short" setting={settings.short} />
            </TabPanel>
            <TabPanel>
                <Timer id="long" setting={settings.long} />
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllTimers;