import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div id="footer">
	            <ul className="copyright">
	              <li>&copy; Erica Lehotzky</li><li>Hosted on Erica's <a href="https://www.raspberrypi.org/" target="_blank"><img className="pi" src="images/rpi.png" /></a></li>
	            </ul>
			</div>
		);
	}
}
