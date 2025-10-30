import React, { useState } from 'react';
import {Tab_Box} from './assets/scss/TabBox.scss';
import Tabs from './Tabs.js';
import TabView from './TabView.js';
import data from './assets/json/data.js';

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0);
    const selectTab = function(no){
        console.log(no);
    }

    return (
        <div className={Tab_Box}>
            <Tabs 
            selectTab={selectTab}
            tabs={data.map((tab, index) => ({
                
                        no: tab.no,
                        name: tab.name,
                        active: index === activeIndex
            })
            )}/>
            <TabView />
        </div>
    );
}

export default TabBox;