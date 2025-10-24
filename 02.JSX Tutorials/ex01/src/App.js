import React from 'react';

function App() {
    const greetings = 'hello, world';
    const styles = {
        textDecoration: 'underline'
    };
    return (
        <div>
            <h1>Ex01</h1>
            <p>특징 1: HTML과 비교</p>
            <input type='text' maxLength={'5'} />
            <hr/>
            {}
            <img src=''/>
            <h4 id ='title' className='header' style={styles}>{greetings}</h4>
        </div>
    );
}

export default App;