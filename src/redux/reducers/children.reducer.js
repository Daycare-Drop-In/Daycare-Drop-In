const childrenReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CHILD':
            return action.payload;
            default:
                return state;
    }
}

export default childrenReducer;