import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

/*PSEUDO-CODE NOTES FOR FAMILY SAGAS:

function* getAllFamilies() -- all the families in the database (for admin view)
		yield put SET_FAMILIES

function* getFamily() -- get all the info for a particular family (to render family user page) 
		yield put SET_FAMILY

function* updateFamily() -- update info for a particular family
	 	yield put GET_FAMILY to re-render updated info

function deleteFamily() -- lets admin remove a family from the database
		yield put GET_ALL_FAMILIES to rerender updated info

*/

function* familySaga() {

	yield takeLatest('GET_ALL_FAMILIES)', getAllFamilies);
	yield takeLatest('GET_FAMILY', getFamily);
	yield takeLatest('UPDATE_FAMILY', updateFamily);
	yield takeLatest('DELETE_FAMILY', deleteFamily);

}

export default familySaga;