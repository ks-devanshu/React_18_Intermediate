
interface Action {
    type: 'INCREMENT' | 'RESET'
}

const counterReducer = (value:number, action:Action): number => {
    switch (action.type) {
        case 'INCREMENT':
            return value + 1;
        case 'RESET':
            return 0;
    }
};

export default counterReducer;