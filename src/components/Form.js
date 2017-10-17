import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form action="http://localhost:3001/dinosaures/add" method="POST">
          <input type="text" name="name" placeholder="Nom" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="type" placeholder="Espèce" />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default Form;
