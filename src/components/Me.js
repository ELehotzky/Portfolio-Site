import React, { Component } from 'react';

export default class Me extends Component {
  render() {
    return (
      <div id="main">
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
      </div>
    );
  }
}
