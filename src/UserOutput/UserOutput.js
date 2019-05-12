import React from 'react';
import './userOutput.scss';

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p style={{fontSize:'20px'}}>This is the student <span style={{color:'purple'}}>{props.name}</span></p>
            <p style={{fontSize:'18px',fontStyle:'italic',color:'red'}}>The weather is beautiful!</p>
        </div>
    )
}

export default UserOutput;