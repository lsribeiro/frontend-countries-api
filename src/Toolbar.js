import React from 'react';

import './Toolbar.scss';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	onSelect(e) {
		this.props.onChangeRegion(e.target.value);
	}

	onSearch(e) {
		this.props.onChangeSearch(e.target.value);
	}

	render() {
		return(
			<div className="toolbar-container">
				<input type="text" name="" id="" placeholder="&#xF002; Search for a country..." onChange={ this.onSearch } />
				<select defaultValue="filter" onChange={ this.onSelect }>
					<option hidden disabled value="filter" >Filter by Region</option>
					<option value="All">All</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		);
	}
}

export default Toolbar;
