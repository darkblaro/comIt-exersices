import React from 'react';

function MyName(props) {
    return(
        <div>
            <h3>Hello, {props.name}</h3>
        </div>
    );
}

export default MyName