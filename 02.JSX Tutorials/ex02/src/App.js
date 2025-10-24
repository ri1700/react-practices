import React from 'react';

function App() {
    const styles = {
        textDecoration: 'underline'
    };
    return (
        <div>
            <h1>Ex02</h1>
            <p>특징 II: Sigle Root</p>
        </div>
    );
}

/*

-> transpile 후의 컴포넌트

function App(){
    return(
        React.createElement('div', null, React.createElement('h1', null, 'ex02'), React.createElement('p', null, '특징 II: Sigle Root);
    );
}

*/

/*
function App() {
    return (
        <h1>Ex02</h1>
        <p>특징 II: Sigle Root</p>
    );
}

-> transpile 후의 컴포넌트

// 문법 오류

function App(){
    return(
        React.creteElement('h1', null,'ex02')
        React.createElement('p', null, '특징 II: Sigle Root)
    );

}

*/

export default App;