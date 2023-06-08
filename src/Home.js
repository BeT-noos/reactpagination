import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';


 
class Home extends Component {
  render() {
    return (
   //   <div>
     //    <h2>TECHNICAL INTERVIEW FRONTED DEVELOPER</h2>
     //    <p><img src={logo} className="App-logo" alt="logo" /></p>

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          created for finishing.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/bet2prof"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>TECHNICAL INTERVIEW FRONTED DEVELOPER</h2>
        </a>
      </header>
    </div>
    );
  }
}
 
export default Home;
