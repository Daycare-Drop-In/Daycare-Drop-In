import { combineReducers } from 'redux';


const providerReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_PROVIDER":
      return action.payload;
    default:
      return state;
  }
};

const allProvidersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_PROVIDERS":
      return action.payload;
    default:
      return state;
  }
};

const filteredProvidersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FILTERED_PROVIDERS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  providerReducer,
  allProvidersReducer,
  filteredProvidersReducer,
});
