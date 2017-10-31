import React, { Component } from 'react';
import logo from '../images/jurassic-world.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="Logo"/>
        <p>DINO API</p>
      </header>
    )
  }
}

export default Header;
