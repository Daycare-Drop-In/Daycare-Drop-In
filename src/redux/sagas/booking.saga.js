import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//Gets all the bookings for the provider of the given ID
function* getProviderBookings(id) {
  console.log("Inside getProviderBookings for provider of id:", id.payload);
  try {
    const bookings = yield axios.get(`/api/booking/provider/${id.payload}`);
    yield put({ type: "SET_BOOKINGS", payload: bookings.data[0] });
  } catch (error) {
    console.log("Error in getProviderBookings saga", error);
  }
}

//Gets all the bookings for the family of the given ID
function* getFamilyBookings(id) {
  console.log("Inside getFamilyBookings for family of id:", id.payload);
  try {
    const bookings = yield axios.get(`/api/booking/${id.payload}`);
    yield put({ type: "SET_BOOKINGS", payload: bookings.data[0] });
  } catch (error) {
    console.log("Error in getFamilyBookings saga", error);
  }
}

//Add a booking
function* postBooking(action) {
  console.log("Inside postBooking saga:", action.payload);
  try {
    yield axios.post("/api/booking", action.payload);
    yield put({ type: "GET_BOOKINGS" });
  } catch {
    console.log("error with postBooking saga", error);
  }
}

//Delete a booking
function* deleteBooking(id) {
  console.log("Inside deleteBooking for booking of ID:", id.payload);
  try {
    yield axios.delete(`/api/booking/${id.payload}`);
  } catch (error) {
    console.log("Error in deleteBooking saga", error);
  }
}

function* bookingSaga() {
  yield takeLatest("GET_FAMILY_BOOKINGS", getFamilyBookings);
  yield takeLatest("GET_PROVIDER_BOOKINGS", getProviderBookings);
  yield takeLatest("POST_BOOKING", postBooking);
  yield takeLatest("DELETE_BOOKING", deleteBooking);
}

export default bookingSaga;
