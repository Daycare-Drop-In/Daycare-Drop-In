const availabilityReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_AVAILABILITY':
            return action.payload;
            default:
                return state;
    }
}

export default availabilityReducer;