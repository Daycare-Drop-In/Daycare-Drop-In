import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import family from "./family.reducer";
import provider from "./providers.reducer";
import booking from "./booking.reducer";
import children from "./children.reducer";
import responsibleAdults from "./responsible_adults.reducer";
import availability from "./availability.reducer";
import photo from "./photo.reducer";
import accessCodeReducer from "./codeReducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  //all reducers correspond to a data table
  family,
  provider,
  booking,
  children,
  responsibleAdults,
  availability,
  photo,
  accessCodeReducer,

  // will have an id and username if someone is logged in
});

export default rootReducer;
