import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<React.Fragment>
			<Route exact path="/" component={App} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/contact" component={Contact} />
		</React.Fragment>
	</Router>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
