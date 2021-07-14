import React from 'react';
import '../styles/About.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  AboutStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function About() {
  return (
  <section className="about-me">
    <div className="row">
      <div className="column-family" id="about-me">
        <div className="content">
          <h4>About Me</h4>
          <p>I'm Dereje Ayele, Born and Grown Up in East Afarica, Ethiopia.
            Father of two cute boys. currently working at VCU Health System Microbiolgy Lab. 
            Former student and worker of Jimma University and Mettu Health Center as Technical Assistance and 
            Medical Lab Tech respectively. Graduated from Harmay University by  
            Associate Degree, and From Jimma University BSc 2012. I moved To Richmond, VA, US by 2013.
            Now at school for Full Stack Developer at University of Richmond Coding boot camp.
        </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;
