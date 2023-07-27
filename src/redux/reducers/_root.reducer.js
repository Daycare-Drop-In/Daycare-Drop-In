import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import familyReducer from "./family.reducer";
import providerReducer from "./providers.reducer";
import bookingReducer from "./booking.reducer";
import childrenReducer from "./children.reducer";
import responsibleAdultsReducer from "./responsible_adults.reducer";
import availabilityReducer from "./availability.reducer";
import photoUploadReducer from "./photo.reducer";
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  //all reducers correspond to a data table
  familyReducer,
  providerReducer,
  bookingReducer,
  childrenReducer,
  responsibleAdultsReducer,
  availabilityReducer,
  photoUploadReducer,

  // will have an id and username if someone is logged in
});

export default rootReducer;
