import { useState } from 'react';
import './App.css';
import { BearCounter } from './BearCounter';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BearCounter />
		</>
	);
}

export default App;
