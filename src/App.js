import React, { Component } from 'react';
import './App.scss';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Practice2 from './Practice2/Practice2';

class App extends Component {
  state = {
    name: 'Oleg',
    practice2:false

  }

  userInputChangeHandler = event => {
    this.setState({
      name: event.target.value
    })
  }
showPractice2Handler = () => {
this.setState({
  practice2:!this.state.practice2
})
}
 
  render() {

    return (
      <div className="App">
        <h1>React Practice Part from Max Shcwarzmuller's course by Udemy</h1>
        <UserInput
          name={this.state.name}
          changed={this.userInputChangeHandler} />
        <UserOutput name={this.state.name} />

        <UserOutput name='Rodger' />
        <hr style={{ height: '1px', border: 'none', backgroundColor: 'green' }} />
        <button className="Btn-Practice2" onClick={this.showPractice2Handler}> <h3>Practice Work - 2</h3></button>
      {this.state.practice2&& <Practice2/>}

      </div>
    );
  }

}

export default App;
