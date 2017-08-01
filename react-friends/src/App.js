import React, { Component } from 'react';
import './App.css';
import { people } from './people';
import PeopleList from './PeopleList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    this.setState({people: people});
  }
  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
