import React from 'react';
import '../styles/Home.css';
import Dereje from "../image/Dereje3.jpg"
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  homeStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

// We use JSX curly braces to evaluate the style object
function Home() {
  return (
   <div className="home" id="home">
    <div className="max-width">
    <div className="img-main">
      <div className="imge">
      <img src={Dereje} alt="Dereje imge" width="300" height="500"/>
     </div>
    </div>
     <div className="home-content">
       <div className="text-1">Hello, My name is </div>
       <div className="text-2">Dereje Ayele </div>
       <div className="text-3">I'm a Full Stack Developer</div>
       <div className="text-4">currently working  as</div>
       <div className="text-5">Pathology Tech </div>
     </div>
     
  </div>
  </div>
  );
}

export default Home;
