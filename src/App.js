import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js";
import Work from "./components/Work.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div id="wrapper">

      	<Nav />

        {/*<!-- Main -->*/}
          <div id="main">

            {/*<!-- Me -->*/}
              <article id="home" className="panel intro">
                <header>
                  <h1>Jane Doe</h1>
                  <p>Senior Astral Projectionist</p>
                </header>
                <a href="#work" className="jumplink pic">
                  <span className="arrow icon fa-chevron-right"><span>See my work</span></span>
                  <img src="images/me.jpg" alt="" />
                </a>
              </article>

          <Footer />

      </div>

      </div>
    );
  }
}

export default App;
