import React from 'react';
import PropTypes from 'prop-types';
import PickOption from './PickOption';

const didUserWin = (userPick, housePick) => {
	if (userPick === housePick) {
		return false;
	}

	if (userPick === 'rock' ) {
		return housePick === 'scissors';
	} else if (userPick === 'paper') {
		return housePick === 'rock';
	} else if (userPick === 'scissors') {
		return housePick === 'paper';
	}
};

const StepTwo = ({ userPickedValue, replay, updateScore }) => {
	const options = ['rock', 'paper', 'scissors'];
	const housePickedValue = options[Math.floor(Math.random() * options.length)];
	const userWon = didUserWin(userPickedValue, housePickedValue);

	return (
		<>
			<div>
				<h2>You picked</h2>
				<PickOption option={userPickedValue} />
			</div>
			<div>
				<p>{userWon ? "You win" : "You lose"}</p>
				<button onClick={() => { updateScore(userWon); replay(); }}>Play again</button>
			</div>
			<div>
				<h2>The house picked</h2>
				<PickOption option={housePickedValue} />
			</div>
		</>	
	);
}

StepTwo.propTypes = {
	replay: PropTypes.func.isRequired,
	updateScore: PropTypes.func.isRequired,
	userPickedValue: PropTypes.string.isRequired,
}

export default StepTwo;