import React, { Component } from 'react';

class DinoForm extends Component {

  render() {
    return (
      <div>
        <form action="http://localhost:3001/dinosaures/add" method="POST" encType="multipart/form-data">
          <input type="text" name="name" placeholder="Nom" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="type" placeholder="Espèce" /><br/>
          <input type="file" name="photo"/>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    );
  }

}

export default DinoForm;
