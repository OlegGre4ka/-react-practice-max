import React from 'react';
import './userInput.scss';

const UserInput = props => {
    return(
        <input type='text'className="UserInput" value={props.name} onChange={props.changed}/>
    )
}

export default UserInput;