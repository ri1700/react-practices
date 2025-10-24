import React from 'react';

function Contents(props) {
    /*
    return (
        <p>{props.text}</p>
    );
    */

    // return 반드시 시켜주기
    return React.createElement('p', null, 'Pure React(함수 컴포넌트');
}

export default Contents;