import { useBearStore } from './store/store';

export const BearCounter = () => {
	const bears = useBearStore(state => state.bears);
	const increasePopulation = useBearStore(state => state.increasePopulation);
	const removeAllBears = useBearStore(state => state.removeAllBears);

	return (
		<div>
			<h1>{bears} around here</h1>
			<button onClick={increasePopulation} style={{ marginRight: '10px' }}>
				+
			</button>

			<button onClick={removeAllBears}>Clear</button>
		</div>
	);
};
