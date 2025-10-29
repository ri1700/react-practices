import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const _this = this;
        return (
            <div
                className={'App'}
                
                ref = {(ref) => {
                    this.outherRef = ref;
                }}>
                onScroll = {() =>{
                    console.log(this.outherRef.scrollTop, this.outherRef.clientHeight, this.innerRef.clientHeight);
                    
                }}
                <div
                    ref={function(ref) {
                        this.innerRef = ref;
                    }}>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
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
}