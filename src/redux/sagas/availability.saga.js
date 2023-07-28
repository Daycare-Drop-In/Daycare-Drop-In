import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//Gets all the availability data for a provider of the given id
function* getAllAvailability() {
  console.log("Inside getAllAvailability");
  try {
    const availability = yield axios.get(`/api/availability`);
    yield put({ type: "SET_AVAILABILITY", payload: availability.data });
  } catch (error) {
    console.log("Error in getAllAvailability saga:", error);
  }
}
function* getProviderAvailability(action) {
  console.log(
    "Inside getAvailability saga for provider of id:",
    action.payload
  );
  try {
    const availability = yield axios.get(
      `/api/availability/details/${action.payload}`
    );
    yield put({ type: "SET_AVAILABILITY", payload: availability.data });
  } catch (error) {
    console.log("Error in getProviderAvailability saga:", error);
  }
}

function* addAvailability(action) {
  console.log("Inside addAvailability saga:", action.payload);
  try {
    yield axios.post(`/api/availability`, action.payload);
    yield put({ type: "GET_PROVIDER_AVAILABILITY" });
  } catch (error) {
    console.log("error with update request in post saga:", error);
  }
}

function* availabilitySaga() {
  yield takeLatest("GET_ALL_AVAILABILITY", getAllAvailability);
  yield takeLatest("GET_PROVIDER_AVAILABILITY", getProviderAvailability);
  yield takeLatest("ADD_AVAILABILITY", addAvailability);
  // yield takeLatest("GET_FILTERED_AVAIL", getFilteredAvailability);
}

export default availabilitySaga;
