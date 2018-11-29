import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js";
import Me from "./components/Me.js";
import Work from "./components/Work.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
      	<Nav />
      	<Me />
        <Footer />
      </div>
    );
  }
}

export default App;
