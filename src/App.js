import React from 'react';
import './App.scss';

import Header from './Header';
import Toolbar from './Toolbar';
import CountryList from './CountryList';

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
  	  		<div className="app">
  	  	  		<Header />

  	  	  		<div className="container">
  	  	  			<Toolbar onChangeRegion={ this.onChangeRegion } onChangeSearch={ this.onChangeSearch }/>
  	  	  			<CountryList region={ this.state.region } search={ this.state.search }/>
				</div>
			</div>
  		);
  	}
}

export default App;
