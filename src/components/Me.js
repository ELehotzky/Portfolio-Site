import React, { Component } from 'react';
import Work from "./Work.js";

export default class Me extends Component {
  render() {
    return (
      <div id="main">
              <article id="home" className="panel intro">
                <header>
                  <h1>Erica Lehotzky</h1>
                  <p>Full-Stack Software Engineer</p>
                </header>
                <a className="jumplink pic">
                  <img src="images/me.jpg" alt="erica-lehotzky" />
                </a>
              </article>
      </div>
    );
  }
}
