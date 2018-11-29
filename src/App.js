import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
      	        {/*<!-- Wrapper-->*/}
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

            {/*<!-- Work -->*/}
              <article id="work" className="panel">
                <header>
                  <h2>Work</h2>
                </header>
                <p>
                  Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  luctus elit eget interdum.
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
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic10.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic11.jpg" alt="" /></a>
                    </div>
                    <div className="col-4 col-6-medium col-12-small">
                      <a href="#" className="image fit"><img src="images/pic12.jpg" alt="" /></a>
                    </div>
                  </div>
                </section>
              </article>

            {/*<!-- Contact -->*/}
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

          <Footer />

      </div>

      </div>
    );
  }
}

export default App;
