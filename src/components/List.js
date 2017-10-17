import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div className="List">
        <ul>
          {this.props.dinosaures.map((dino, index) => {
            return (<li>{dino.name}, {dino.age} ans, famille des {dino.type}</li>) 
          })}
        </ul>
      </div>
    );
  }

}

export default List;
