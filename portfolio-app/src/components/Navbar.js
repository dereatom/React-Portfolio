import React from 'react';
import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  NavbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <div className="header" id="header-bar">
    <nav className="navbar navbar -expand-lg navbar-light bg-dark">
      <a className="navbar" id="portfolio" href="#Portfolio">My Portfolio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <a className="nav-link active" href="#home">Home</a>
        <a className="nav-link" href="#about-me">About</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contacts">Contacts</a>
    </nav>
    </div>
  );
}

export default Navbar;
