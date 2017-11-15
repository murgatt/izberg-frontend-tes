// Initial state
const initialState = {
    firstName   : '',
    lastName    : '',
    email       : '',
};

// Reducers
const reducers = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'CHANGE_VALUE':
            newState[action.id] = action.value;
            return newState;
        default:
            return state;
    }
};

export default reducers;