import React, { Component } from 'react';
import Me from "./Me.js";
import Work from "./Work.js";

export default class Nav extends Component {
	render() {
		return (
          <nav id="nav">
            <a href="/" className="icon fa-home"><span>Home</span></a>
            <a href="/work" className="icon fa-folder"><span>Work</span></a>
            <a href="/contact" className="icon fa-envelope"><span>Contact</span></a>
            <a href="https://twitter.com/ericalehotzky" target="_blank" className="icon fa-twitter"><span>Twitter</span></a>
          </nav>
		);
	}
}
