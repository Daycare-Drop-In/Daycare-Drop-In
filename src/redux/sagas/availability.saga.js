import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


/*
function* getFilteredAvail() -- get all the availability info for the list of providers, 
filtered by relevance to the user. We haven't quite decided how we want to do this yet!
        yield put SET_FILTERED_AVAIL
*/


//Gets all the availability data for a provider of the given id
function* getAvailability(id) {
  console.log("Inside getAvailability saga for provider of id:", id.payload);
  try {
    const availability = yield axios.get(`api/availability/${id.payload}`);
    yield put({ type: "SET_AVAILABILITY", payload: availability.data });
  } catch (error) {
    console.log("Error in getAvailability saga:", error);
  }
}

function* updateAvailability(action) {
  console.log("Inside updateAvailability saga:", action.payload);
  try {
    yield axios.put(`/api/availability/${action.payload.id}`, action.payload);
    yield put({ type: "GET_AVAILABILITY", payload: action.payload.id });
  } catch (error) {
    console.log("error with update request in post saga:", error);
  }
} 

function* availabilitySaga() {
  yield takeLatest("GET_AVAILABILITY", getAvailability);
  yield takeLatest("UPDATE_AVAILABILITY", updateAvailability);
  // yield takeLatest("GET_FILTERED_AVAIL", getFilteredAvailability);
}

export default availabilitySaga;
