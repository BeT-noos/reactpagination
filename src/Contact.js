import React, { Component } from "react";
import './App.css';
import logo from './logo.svg';


class Contact extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Contact</h2>
        </p>
       <p>
        <a
          className="App-link"
          href="mailto:oO0bet0Oo@gmail.com?subjectSIO%20TEST"
          target="_blank"
          rel="noopener noreferrer"
        >
           Email: oO0BeT0Oo@gmail.com <br />
        </a>
           Phone: +6281221470943
        </p>
      </header>
      </div>
    );
  }
}
 
export default Contact;

 