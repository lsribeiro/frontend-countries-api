import React from 'react';

import './Toolbar.scss';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onChangeRegion(e.target.value);
	}
	render() {
		return(
			<div className="toolbar-container">
				<input type="text" name="" id="" placeholder="Search" />
				<select defaultValue="filter" onChange={ this.onChange }>
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
