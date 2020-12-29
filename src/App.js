import React, { useState } from 'react';
import Header from 'components/Header';
import StepOne from 'components/StepOne';
import StepTwo from 'components/StepTwo';

function App() {
	const [score, setScore] = useState(0);
	const [picked, setPicked] = useState(null);

	return (
	<div className="game">
		<Header score={score}/>
		<main className={picked === null ? 'step-one' : 'step-two'}>
			{!picked && <StepOne onPick={(pickedValue) => setPicked(pickedValue)}/> }
			{picked &&
				<StepTwo
					replay={() => setPicked(null)}
					updateScore={(didUserWin) => setScore(score + (didUserWin ? 1 : 0))}
					userPickedValue={picked} />
			}
		</main>
	</div>
	);
}

export default App;
