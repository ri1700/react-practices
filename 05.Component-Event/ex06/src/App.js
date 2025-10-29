import React, {useRef} from 'react';
import './assets/scss/App.scss';

export default function App() {
        const outerRef = useRef(null);
        const innerRef = useRef(null);

        return (
            <div
                className={'App'}
                ref = {outerRef}
                onScroll = {() => {
                    console.log(outerRef.current.scrollTop, outerRef.current.clientHeight, innerRef.current.clientHeight);
                    if(innerRef.current.clientHeight === outerRef.current.scrollTop +  outerRef.current.clientHeight) {
                        console.log('call api');
                    }
                }}>

                <div
                    ref = {innerRef} >
                    <ul>
                        {Array.from({length: 50}, (_, i) => i + 1).map(i =>
                            <li
                                key={i}>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        );
}