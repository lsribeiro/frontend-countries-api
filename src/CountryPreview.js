import React from 'react';

import './CountryPreview.scss';

/*var flagStyle = {
	backgroundImage: 'url(' + country.flag + ')'
};*/

function CountryPreview({ country }) {
	return(
		<div className="country-card-preview">
			<div className="flag-container" style={{
				backgroundImage: 'url(' + country.flag + ')'
			}}>
			</div>
			<h4>{country.name}</h4>

			<ul>
				<li><strong>Population:</strong> {country.population}</li>
				<li><strong>Region:</strong> {country.region}</li>
				<li><strong>Capital:</strong> {country.capital}</li>
			</ul>	
		</div>
	);
}

//<img src={country.flag} alt={country.name} />
export default CountryPreview;
