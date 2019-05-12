import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class Practice2 extends Component {
    state = {
        text: '',
        lengthString: 0,
        list: [
            { color: 'black', text: 'Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).' },
            { color: 'black', text: 'Create a new component (=> ValidationComponent) which receives the text length as a prop' },
            { color: 'black', text: 'Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)' },
            { color: 'black', text: 'Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).' },
            { color: 'black', text: 'Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.' },
            { color: 'black', text: 'When you click a CharComponent, it should be removed from the entered text.' }
        ]
    }

    componentWillMount() {
        const list = localStorage.getItem('list');
        if (list === null) {
            this.setState({
                list: this.state.list
            })
        }
        else {
            this.setState({
                list: JSON.parse(list)
            })
        }
    }


    textChangeHandler = (event, indexChar) => {
        let lengthInputText = event.target.value.length;
        this.setState({
            text: event.target.value,
            lengthString: lengthInputText
        })
    }

    toggleColor = (index) => {
        const list = [...this.state.list];
        list[index].color = list[index].color === 'black' ? 'green' : (list[index].color === 'green' ? 'red' : 'black');
        localStorage.setItem('list', JSON.stringify(list))
        this.setState({
            list
        })
    }

    deleteCharHandler = (indexChar) => {
        let textArray = [...this.state.text];
        textArray.splice(indexChar, 1);
        let text = textArray.join('');
        this.setState({
            text,
            lengthString:text.length
        })
    }
    render() {
        const styleInput = {
            width: '200px',
            height: '25px',
            fontSize: '18px',
            color: 'blue',
            border: '2px solid purple',
            borderRadius: '5px',
            paddingLeft: '5px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'green' }} />

                <input type='text' className="TextInput" style={styleInput}
                    value={this.state.text}
                    onChange={this.textChangeHandler} />
                <p>Text length: {this.state.lengthString}</p>
                <ValidationComponent length={this.state.lengthString} />
                <CharComponent charList={this.state.text} deletedChar={(index) => this.deleteCharHandler(index)} />


                <hr style={{ height: '1px', border: 'none', backgroundColor: 'green' }} />

                <div>
                    <ol style={{ textAlign: 'left' }}>
                        {this.state.list.map((li, i) => <li onClick={() => this.toggleColor(i)} style={{ color: li.color, cursor: 'pointer' }} key={i}>
                            {li.text}
                        </li>)}
                    </ol>
                    <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                </div>

            </div>
        );
    }

}

export default Practice2;
