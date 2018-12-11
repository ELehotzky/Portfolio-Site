import React, { Component } from 'react';
import Nav from "./Nav.js";

export default class Work extends Component {
	render() {
		return (
      <div id="wrapper">
        <Nav />
            <div id="main">
              <article id="work" className="panel">
                <header>
                  <h2>Work</h2>
                </header>
                <p>
                  Here is a small example of some of the projects I've developed.
                </p>
                <section>
                  <div className="row">
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic08.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic09.jpg" alt="" /></a>
                    </div>
                  </div>
                </section>
              </article>
            </div>
        </div>
		);
	}
}
