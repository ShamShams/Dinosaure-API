import React, { Component } from 'react';
import request from 'request';
import './stylesheets/App.css';
import List from './components/List';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaures: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/dinosaures/";
    request(url, (err, res, body) => {
      if (err);
      this.setState({
        dinosaures: JSON.parse(body)
      });
    })
  }

  render() {
    return (
      <div className="App">
        <List dinosaures={this.state.dinosaures} />
        <Form />
      </div>
    );
  }
}

export default App;
