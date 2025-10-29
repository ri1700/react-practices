import React, {Fragment, useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const onMouseOver = (e) => {
        console.log('mouseover', 'x=${e.clientX}, y=${e.clientY}');
    }
    const onMouseMove = (e) => {
        console.log('mouseover', 'x=${e.clientX}, y=${e.clientY}')
    }
    
    return (
        <>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onChange = {onChange}/>
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver = {onMouseOver}
                onDoubleClick = {onDoubleClick}/>
        </>
    );
}