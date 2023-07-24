const photoUploadReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PHOTOS':
            return action.payload;
            default:
                return state;
    }
}

export default photoUploadReducer;