import React from 'react';
import './charComponent.scss'

const CharComponent = props => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid purple'
    }
    let charList = props.charList.split('');
    return (
        <div className='CharComponent'style={style}>
            <ol>
                {charList.map((char,i) => <li 
                onClick={
                    ()=>props.deletedChar(i)
                  }
                style={{cursor:'pointer'}}
                key={i}>{char}</li>)}
            </ol>
        </div>
    )
}

export default CharComponent;