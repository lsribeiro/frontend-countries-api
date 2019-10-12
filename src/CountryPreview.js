import React from 'react';

import './CountryPreview.scss';

function CountryPreview({ country }) {
	return(
		<div>
			<img src={country.flag} alt={country.name} />
			<h1>{country.name}</h1>
			<p><strong>Population:</strong> {country.population}</p>
			<p><strong>Region:</strong> {country.region}</p>
			<p><strong>Capital:</strong> {country.capital}</p>
		</div>
	);
}

export default CountryPreview;
