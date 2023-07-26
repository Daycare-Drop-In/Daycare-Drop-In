const availabilityReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_AVAIL':
            return action.payload;
        default:
                return state;
    }
}

const FilteredAvailabilityReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FILTERED_AVAIL':
            return action.payload;
        default:
            return state;
    }
}        

export default combineReducers({
    loginMessage,
    registrationMessage,
  });