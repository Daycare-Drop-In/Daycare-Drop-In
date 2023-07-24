const bookingReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_BOOKING':
            return action.payload;
            default:
                return state;
    }
}

export default bookingReducer;