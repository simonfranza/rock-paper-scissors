import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as RockSvg} from 'assets/icon-rock.svg';
import {ReactComponent as PaperSvg} from 'assets/icon-paper.svg';
import {ReactComponent as ScissorsSvg} from 'assets/icon-scissors.svg';

const PickOption = ({ onPick, option }) => (
	<div className={`pick ${option}`} onClick={() => onPick(option)}>
		<div className="inner-circle">
			{option === 'rock' && <RockSvg />}
			{option === 'paper' && <PaperSvg />}
			{option === 'scissors' && <ScissorsSvg />}
		</div>
	</div>
);

PickOption.propTypes = {
	onPick: PropTypes.func,
	option: PropTypes.string.isRequired,
};

PickOption.defaultProps = {
	onPick: () => {}, 
};

export default PickOption;