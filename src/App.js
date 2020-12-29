import React, { useState } from 'react';
import Header from 'components/Header';
import Pick from 'components/Pick';

function App() {
	const [score, setScore] = useState(0);

	return (
	<div className="game">
		<Header score={score}/>
		<main>
			<Pick onPick={(pickedValue) => (console.log(pickedValue))}/>
		</main>
	</div>
	);
}

export default App;
