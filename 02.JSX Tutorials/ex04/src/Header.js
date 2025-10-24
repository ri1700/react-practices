import React from 'react';

function Header(props) {
    /*
    return (
        <h1>Ex04</h1>
    );
    */

    // return 반드시 시켜주기
    return React.createElement('h1', null, 'ex04');
}

export default Header;