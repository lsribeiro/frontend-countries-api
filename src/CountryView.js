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
				<div className="back-btn-container">
					<Link to='/'>
						<button type="submit">
							<i className="fa fa-long-arrow-left" aria-hidden="true"></i>
							Back
						</button>
					</Link>
				</div>
				<div className="country-container">
					<div className="country-image-container">
						<img src={country.flag} alt="Flag" />
					</div>
					<div className="country-info-container">
						<div className="country-name">
							<h1>{country.name}</h1>
						</div>
						<div className="country-details">
							<ul>
								<li><strong>Native Name:</strong> {country.nativeName}</li>
								<li><strong>Population:</strong> {country.population}</li>
								<li><strong>Region:</strong> {country.region}</li>
								<li><strong>Sub Region:</strong> {country.subregion}</li>
								<li><strong>Capital:</strong> {country.capital}</li>
								<li><strong>Top Level Domain:</strong> {country.topLevelDomain}</li>
								<li><strong>Currencies:</strong> {country.currencies ? country.currencies.map(currency => currency.name): ''}</li>
								<li><strong>Languages:</strong> {country.languages ? country.languages.map(language => language.name): ''}</li>
							</ul>
						</div>
						<div className="country-border">
							<p><strong>Border Countries:</strong>{
								country.borders ? country.borders.map(border => {
									return(
										<Link to={{
											pathname: `/${border}`
										}}>
											{ border }
										</Link>
									);
								}) : ''
							} </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CountryView;
