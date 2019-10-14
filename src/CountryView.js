import React from 'react';
import { Link } from 'react-router-dom';

import './CountryView.scss';

class CountryView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: {}
		};

		this.getCountry = this.getCountry.bind(this);
	}

	async getCountry() {
		let url = `https://restcountries.eu/rest/v2/name/${this.props.match.params.country}?fullText=true`;
		let data = await fetch(url);
		let country = await data.json();

		return country;
	}

	componentDidMount() {
		this.getCountry().then(country => this.setState({ country: country[0] }));
	}

	render() {
		let country = this.state.country;

		return(
			<div className="country-preview-container">
				<Link to='/'>
					<button type="submit">Back</button>
				</Link>
				<img src={country.flag} alt="Flag" />
				<h1>{country.name}</h1>
				<p>Native Name: {country.nativeName}</p>
				<p>Population: {country.population}</p>
				<p>Region: {country.region}</p>
				<p>Sub Region: {country.subregion}</p>
				<p>Capital: {country.capital}</p>
				<p>Top Level Domain: {country.topLevelDomain}</p>
				<p>Currencies: {country.currencies ? country.currencies.map(currency => currency.name): ''}</p>
				<p>Languages: {country.languages ? country.languages.map(language => language.name): ''}</p>
			</div>
		);
	}
}

export default CountryView;
