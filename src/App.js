import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './Header';
import Toolbar from './Toolbar';
import CountryList from './CountryList';
import CountryView from './CountryView';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			region: 'All',
			search: ''
		};

		this.onChangeRegion = this.onChangeRegion.bind(this);
		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeRegion(region) {
		this.setState({ region });
	}

	onChangeSearch(search) {
		this.setState({ search });
	}
	render() {
  		return (
  			<Router>
  	  			<div className="app">
  	  	  			<Header />

  	  	  			<div className="container">
  	  	  				<Switch>
  	  	  					<Route exact path='/'>
  	  	  						<Toolbar onChangeRegion={ this.onChangeRegion } onChangeSearch={ this.onChangeSearch }/>
  	  	  						<CountryList region={ this.state.region } search={ this.state.search }/>
  	  	  					</Route>
  	  	  					<Route exact path='/:country' component={ CountryView }>
  	  	  					</Route>
  	  	  				</Switch>
					</div>
				</div>
			</Router>
  		);
  	}
}

export default App;
