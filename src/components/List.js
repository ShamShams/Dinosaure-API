import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div className="List">
        <ul>
          {this.props.dinosaures.map((dino, index) => {
            return (<li>{dino.name}, {dino.age} ans, {dino.type} <a href={`http://localhost:3001/dinosaures/${dino._id}/remove`}>X</a></li>)
          })}
        </ul>
      </div>
    );
  }

}

export default List;
