import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Header = ({ score }) => (
	<header>
		<Logo />
		<div id="score">
			<h2>Score</h2>
			<p>{score}</p>
		</div>
	</header>
);

Header.propTypes = {
	score: PropTypes.number.isRequired,
}

export default Header;
