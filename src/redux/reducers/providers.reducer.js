const providerReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PROVIDER':
            return action.payload;
            default:
                return state;
    }
}

export default providerReducer;