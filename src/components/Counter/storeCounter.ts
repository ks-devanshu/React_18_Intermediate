import { create } from "zustand"
// import { mountStoreDevtool } from "simple-zustand-devtools"

interface CounterStore {
    counter: number,
    increment: () => void,
    reset: () => void
};

const useCounterStore = create<CounterStore>( set => ({
    counter: 0,
    increment: () => set( prevCounterState => ({ counter: prevCounterState.counter + 1 }) ),
    reset: () => set( () => ({counter: 0})),
}) );

// mountStoreDevtool('Counter Variable', useCounterStore);
export default useCounterStore;