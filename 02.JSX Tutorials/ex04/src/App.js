import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    /*
    return (
        <div id='App'>
            <Header />
            <Contents />
        </div>
    );
    */

    // return 반드시 시켜주기
    return React.createElement('div', {id: 'App'}, React.createElement(Header, null), React.createElement(Contents, null));
}

export default App;