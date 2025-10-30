import React, { useState } from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({no, name, active, selectTab}) {
    console.log(name, no, active)

    return (
        <li 
        className={[Tab_Item, active ? 'active' : ''].join('')}
            onclick = {() =>{
                setActive(no);
            }}>
                {name}
        </li>
    );
}

export default TabItem;