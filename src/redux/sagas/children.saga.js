import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


/*PSEUDO-CODE NOTES FOR CHILDREN SAGAS:

function* getChildren() -- all children of a particular family 
		yield put SET_CHILDREN

function* postChild() -- add a child
		yield put GET_CHILDREN to call getChild function and refresh child info on dom

function* updateChild() -- update info for a particular child
		yield put SET_CHILDREN

function deleteChild() -- delete a child from the database

*/

function* childrenSaga() {
	yield takeLatest('GET_CHILDREN', getChildren);
	yield takeLatest('UPDATE_CHILD', updateChild);
	yield takeLatest('POST_CHILD', postChild);
	yield takeLatest('DELETE_CHILD', deleteChild)

}

export default childrenSaga;