import React, { Component } from 'react';
import request from 'request';
import '../stylesheets/App.css';
import List from './List';
import AddForm from './AddForm';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaures: []
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3001/dinosaures';
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
        <Header />
        <AddForm />
        <List dinosaures={this.state.dinosaures} />
      </div>
    );
  }
}

export default App;
