import React from 'react';

import CountryPreview from './CountryPreview';

class CountryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		};
	}

	async getCountries() {
		let data = await fetch('https://restcountries.eu/rest/v2/all');
		let countries = await data.json();

		return countries;
	}

	componentDidMount() {
		this.getCountries().then(countries => {
			this.setState({
				countries
			})
		});
	}

	render() {
		const countryList = this.state.countries.map((country, index) => {
			return <CountryPreview country={country} key={country.name}/>
		});

		return(
			<div>
				<h1>Countries List</h1>
				{ countryList }
			</div>
		);
	}
}

export default CountryList;
