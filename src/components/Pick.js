import React from 'react';
import PropTypes from 'prop-types';
import PickOption from './PickOption';

const Pick = ({ onPick }) => {
	const options = ['rock', 'paper', 'scissors'].map((option) => 
		<PickOption option={option} onPick={onPick} />
	);

	return (
		<>
			{options}
		</>	
	);
}

Pick.propTypes = {
	onPick: PropTypes.func.isRequired,
}

export default Pick;