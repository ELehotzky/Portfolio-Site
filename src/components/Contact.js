import React, { Component } from 'react';
import Nav from "./Nav.js";

export default class Contact extends Component {
	render() {
		return (
          <div id="wrapper">
            <Nav />
            <div id="main">
              <article id="contact" className="panel">
                <header>
                  <h2>Contact Me</h2>
                </header>
                <form action="#" method="post">
                  <div>
                    <div className="row">
                      <div className="col-6 col-12-medium">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="col-6 col-12-medium">
                        <input type="text" name="email" placeholder="Email" />
                      </div>
                      <div className="col-12">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" placeholder="Message" rows="6"></textarea>
                      </div>
                      <div className="col-12">
                        <input type="submit" value="Send Message" />
                      </div>
                    </div>
                  </div>
                </form>
              </article>
            </div>
        </div>
		);
	}
}
