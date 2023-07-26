const familyReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_FAMILY':
            return action.payload;
            default:
                return state;
    }
}

const familiesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAMILIES':
            return action.payload;
            default:
                return state;
    }
}

export default combineReducers({
    familyReducer,
    familiesReducer
   });