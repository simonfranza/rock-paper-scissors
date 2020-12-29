import React from 'react';
import {ReactComponent as RockSvg} from 'assets/icon-rock.svg';
import {ReactComponent as PaperSvg} from 'assets/icon-paper.svg';
import {ReactComponent as ScissorsSvg} from 'assets/icon-scissors.svg';

const Pick = ({ onPick, option }) => (
	<div className={`pick ${option}`} onClick={() => onPick(option)}>
		<div className="inner-circle">
			{option === 'rock' && <RockSvg />}
			{option === 'paper' && <PaperSvg />}
			{option === 'scissors' && <ScissorsSvg />}
		</div>
	</div>
);

export default Pick;