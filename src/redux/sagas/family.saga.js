import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getFamily(id) {
  console.log("Inside get family saga for family of id:", id.payload);
  try {
    const family = yield axios.get(`api/family/${id.payload}`);
    yield put({ type: "SET_FAMILY", payload: family.data });
  } catch (error) {
    console.log("Error in getToy saga", error);
  }
}

//Updates data for family of a given ID
function* updateFamily(action) {
  console.log("Inside updateFamily saga for family of id:", action.payload.id);
  try {
    yield axios.post(`api/family/${action.payload.id}`, action.payload);
    yield put({ type: "GET_FAMILY" });
  } catch {
    console.log("error with update family request");
  }
}

//Returns all families for the Admin family user table
function* getAllFamilies() {
  console.log("Inside getAllFamiliesSaga");
  try {
    const families = yield axios.get(`api/family`);
    yield put({ type: "SET_FAMILIES", payload: families.data });
  } catch (error) {
    console.log("Error in getAllFamilies saga", error);
  }
}

//Allows admin to delete a family
function* deleteFamily(id) {
  console.log("Inside deleteFamily saga for family of ID:", id.payload);
  try {
    yield axios.delete(`api/family/${id.payload}`);
  } catch (error) {
    console.log("Error in deleteFamily saga:", error);
  }
}

function* familySaga() {
  yield takeLatest("GET_ALL_FAMILIES)", getAllFamilies);
  yield takeLatest("GET_FAMILY", getFamily);
  yield takeLatest("UPDATE_FAMILY", updateFamily);
  yield takeLatest("DELETE_FAMILY", deleteFamily);
}

export default familySaga;
