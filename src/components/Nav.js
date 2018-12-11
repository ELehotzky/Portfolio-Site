import React, { Component } from 'react';
import Me from "./Me.js";
import Work from "./Work.js";

export default class Nav extends Component {
	render() {
		return (
          <nav id="nav">
            {/*Icons taken from fontawesome.com*/}
            <a href="/" className="icon fa-home" aria-hidden="true"><span>Home</span></a>
            <a href="/work" className="icon fa-folder" aria-hidden="true"><span>Work</span></a>
            {/*<a href="/contact" className="icon fa-envelope" aria-hidden="true"><span>Contact</span></a>*/}
            <a href="https://twitter.com/ericalehotzky" target="_blank" className="icon fa-twitter" aria-hidden="true"><span>Twitter</span></a>
            <a href="https://www.linkedin.com/in/ericalehotzky/" target="_blank" className="icon fa-linkedin-square" aria-hidden="true"><span>LinkedIn</span></a>
            <a href="https://github.com/elehotzky" target="_blank" className="icon fa-github" aria-hidden="true"><span>GitHub</span></a>
          </nav>
		);
	}
}
