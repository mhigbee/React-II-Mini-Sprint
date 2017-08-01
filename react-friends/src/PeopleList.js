import React, { Component } from 'react';

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  render() {
    return (
      <div>
        PeopleList Connected

      </div>
    )
  }
};


export default PeopleList;