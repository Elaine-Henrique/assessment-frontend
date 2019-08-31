import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Views/Home';
import Pants from '../Views/Pants';
import Shoes from '../Views/Shoes';
import Tshirts from '../Views/T-shirts';
import NoPage from '../Views/NoPage';

class RouteURL extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/calças" component={Pants} />
				<Route exact path="/sapatos" component={Shoes} />
				<Route exact path="/camisetas" component={Tshirts} />
				<Route path="*" component={NoPage} />
			</Switch>
		)
	}
}

export default RouteURL;