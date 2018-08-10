import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="test" onChange={() => {console.log("I am Clicked!")}}/>
      </React.Fragment>
    )
  }
}

export default App;
