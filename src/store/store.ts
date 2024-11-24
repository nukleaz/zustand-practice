import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBearStore {
	bears: number;
	increasePopulation: () => void;
	removeAllBears: () => void;
}

// export const useBearStore = create<IBearStore>(set => ({
// 	bears: 0,
// 	increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
// 	removeAllBears: () => set({ bears: 0 }),
// }));

export const useBearStore = create<IBearStore>()(
	persist(
		set => ({
			bears: 0,
			increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
			removeAllBears: () => set({ bears: 0 }),
		}),
		{
			name: 'bear-storage',
		}
	)
);
