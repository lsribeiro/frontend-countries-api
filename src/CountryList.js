import React from 'react';

import CountryPreview from './CountryPreview';

import './CountryList.scss';

class CountryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		};

		this.filterByRegion = this.filterByRegion.bind(this);
		this.searchByName = this.searchByName.bind(this);
	}

	async getCountries() {
		let data = await fetch('https://restcountries.eu/rest/v2/all');
		let countries = await data.json();

		return countries;
	}

	filterByRegion(country) {
		if (this.props.region === 'All') return true;

		return country.region === this.props.region;
	}

	searchByName(country) {
		let name = country.name.toLowerCase();
		let search = this.props.search.toLowerCase();

		return name.startsWith(search);
	}

	componentDidMount() {
		this.getCountries().then(countries => {
			this.setState({
				countries
			})
		});
	}

	render() {
		const countryList = this.state.countries.filter(this.filterByRegion).filter(this.searchByName).map((country, index) => {
			return <CountryPreview country={country} key={country.name}/>
		});


		return(
			<div className="country-list">
				{ countryList }
			</div>
		);
	}
}

export default CountryList;
