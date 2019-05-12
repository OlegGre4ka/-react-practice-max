import React from 'react';

const ValidationComponent = props => {
    const style ={
color:'purple',
fontSize:'18px'
    }
    return (
        <div className="Validation">
            {/* <p>Text length: {props.length}</p> */}
            {props.length === 0 && <p style={style}>Input please Text!</p>}

            {props.length !==0 && props.length <= 5 && <p style={style}>Text too short!</p>}
            {props.length > 5 && <p style={style}>Text long enough!</p>}

        </div>
    )
}

export default ValidationComponent;