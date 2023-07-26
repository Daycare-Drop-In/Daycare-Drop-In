import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

/*PSEUDO-CODE NOTES FOR AVAILABILITY SAGAS:

function* getAvail() -- get all the availability data for a particular provider
		yield put SET_AVAIL


function* updateAvail() -- update availability info for a provider 
		yield put GET_AVAIL to rerender the updated list

function* getFilteredAvail() -- get all the availability info for the list of providers, 
filtered by relevance to the user
        yield put SET_FILTERED_AVAIL
*/

function* responsibleAdultSaga() {
  yield takeLatest("GET_AVAIL", getAvail);
  yield takeLatest("UPDATE_AVAIL", updateAvail);
  yield takeLatest("GET_FILTERED_AVAIL", getFilteredAvail);
}

export default responsibleAdultSaga;
