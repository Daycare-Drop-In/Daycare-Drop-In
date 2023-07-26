import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

/*PSEUDO-CODE NOTES FOR BOOKING SAGAS:

function* getProviderBookings() -- all bookings for a particular provider 
		yield put SET_BOOKINGS to establish the data in the store


function* getFamilyBookings() -- get all bookings for a particular family ID


function* postBooking() -- get all bookings for a particular provider ID
	
		
function* deleteBooking() -- delete a booking from the database


*/


function* bookingSaga() {
	yield takeLatest('GET_FAMILY_BOOKINGS', getFamilyBookings);
	yield takeLatest('GET_PROVIDER_BOOKINGS', getProviderBookings);
	yield takeLatest ('POST_BOOKING', postBooking)
	yield takeLatest('DELETE_BOOKING', deleteBooking);
   
}

export default bookingSaga;