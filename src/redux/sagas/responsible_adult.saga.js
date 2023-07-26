import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

/*PSEUDO-CODE NOTES FOR RESPONSIBLE ADULT SAGAS:

function* getAdults() -- all adults of a particular family 
		yield put SET_ADULTS

function* postAdult() -- add a new responsible adult to a family
		yield put GET_ADULTS to rerender the updated list

function* updateAdult() -- update info for a particular adult
		yield put GET_ADULTS to rerender the updated list
    don't forget action.payload

function deleteAdult() -- delete an adult 
 		yield put GET_ADULTS to rerender the updated list

*/

function* responsibleAdultSaga() {
  yield takeLatest("GET_ADULTS", getAdults);
  yield takeLatest("POST_ADULT", postAdult);
  yield takeLatest("UPDATE_ADULT", updateAdult);
  yield takeLatest("DELETE_ADULT", deleteAdult);
}

export default responsibleAdultSaga;
