import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//Get the array of photos for the provider homepage gallery
function* getPhotos(id) {
  console.log("Inside getPhotos saga for provider of id:", id.payload);
  try {
    const photos = yield axios.get(`/api/photo/${id.payload}`);
    yield put({ type: "SET_PHOTOS", payload: photos.data });
  } catch (error) {
    console.log("Error in getPhotos saga", error);
  }
}

//add a new photo to the gallery
function* postPhoto(action) {
  try {
    console.log("Inside postPhoto saga", action.payload);
    yield axios.post("/api/photo", action.payload);
    yield put({ type: "GET_PHOTOS" });
  } catch (error) {
    console.log("error in postPhoto saga", error);
  }
}

//deletes a photo of a given id from the database
function* deletePhoto(id) {
  console.log("Inside deletePhoto saga for photo of ID:", id.payload);
  try {
    yield axios.delete(`/api/photo/${id.payload}`);
  } catch (error) {
    console.log("Error in deletePhoto saga", error);
  }
}

function* photosSaga() {
  yield takeLatest("GET_PHOTOS", getPhotos);
  yield takeLatest("POST_PHOTO", postPhoto);
  yield takeLatest("DELETE_PHOTO", deletePhoto);
}

export default photosSaga;
