import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


/*PSEUDO-CODE NOTES FOR CHILDREN SAGAS:

function* getAllChildren() -- all children of a particular family 
		yield put SET_ALL_CHILDREN

function* getOneChild() -- get one child 
		yield put SET_ONE_CHILD

function* postChild() -- update info for one child
		yield put GET_ALL_CHILDREN to call getChild function and refresh child info on dom

function deleteChild() -- delete a child from the database


*/

function* childrenSaga() {
	yield takeLatest('GET_ALL_CHILDREN', getAllChildren);

}

export default childrenSaga;