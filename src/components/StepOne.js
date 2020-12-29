import React from 'react';
import PropTypes from 'prop-types';
import PickOption from './PickOption';

const StepOne = ({ onPick }) => {
	const options = ['rock', 'paper', 'scissors'].map((option) => 
		<PickOption option={option} onPick={onPick} />
	);

	return (
		<>
			{options}
		</>	
	);
}

StepOne.propTypes = {
	onPick: PropTypes.func.isRequired,
}

export default StepOne;