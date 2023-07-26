import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

/*PSEUDO-CODE NOTES FOR PHOTOS SAGAS:

function* getPhotos() -- get the array of photos for the provider gallery
		yield put SET_PHOTOS

function* postPhoto() -- add a new photo to the gallery
		yield put GET_PHOTOS to refresh the updated array


function* deletePhoto() -- deletes a photo from the database
		yield put GET_PHOTOS to refresh the updated array

*/

function* photosSaga() {
  yield takeLatest("GET_PHOTOS", getPhotos);
  yield takeLatest("POST_PHOTO", postPhoto);
  yield takeLatest("DELETE_PHOTO", deletePhoto);
}

export default photosSaga;
