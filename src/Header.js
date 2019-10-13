import React from 'react';

import './Header.scss';

function Header() {
	return(
		<div className="header">
			<h1>Where in the world?</h1>
			<button className="theme-btn" type=""><i className="fa fa-moon-o"></i>Dark Mode</button>
		</div>
	);
}

export default Header;
