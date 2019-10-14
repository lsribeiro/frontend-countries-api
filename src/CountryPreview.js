import React from 'react';
import { Link } from 'react-router-dom';

import './CountryPreview.scss';

function CountryPreview({ country }) {
	return(
		<Link to={{
			pathname: `/${country.name}`
		}}>
			<div className="country-card-preview">
				<div className="flag-container" style={{
					backgroundImage: 'url(' + country.flag + ')'
				}}>
				</div>
				<div className="country-preview-info">
					<h3>{country.name}</h3>

					<ul>
						<li><strong>Population:</strong> {country.population}</li>
						<li><strong>Region:</strong> {country.region}</li>
						<li><strong>Capital:</strong> {country.capital}</li>
					</ul>	
				</div>
			</div>
		</Link>
	);
}

//<img src={country.flag} alt={country.name} />
export default CountryPreview;
