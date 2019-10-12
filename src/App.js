import React from 'react';
import './App.scss';

import Header from './Header';
import Toolbar from './Toolbar';
import CountryList from './CountryList';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			region: 'All'
		};

		this.onChangeRegion = this.onChangeRegion.bind(this);
	}

	onChangeRegion(region) {
		this.setState({ region });
	}
	render() {
  		return (
  	  		<div>
  	  	  		<Header />
  	  	  		<Toolbar onChangeRegion={ this.onChangeRegion }/>
  	  	  		<CountryList region={ this.state.region }/>
  	  		</div>
  		);
  	}
}

export default App;
