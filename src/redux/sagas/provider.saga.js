import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


/*PSEUDO-CODE NOTES FOR PROVIDER SAGAS:


function* getProvider() -- get all the info for a particular provider (to render provider user page) 
		yield put SET_PROVIDER

function* updateProvider() -- update info for a particular provider
	 	yield put GET_PROVIDER to re-render updated info

function* getAllProviders() -- all the providers in the database (for admin view, maybe for static list view? )
		yield put SET_PROVIDERS

function deleteProvider() -- lets admin remove a provider from the database
		yield put GET_ALL_PROVIDERS to rerender updated info

function getFilteredProviders() -- providers to display in the list, filtered for relevance to user 
		yield put SET_FILTERED_PROVIDERS
*/



function* providerSaga() {
	yield takeLatest('GET_PROVIDER', getProvider);
	yield takeLatest('UPDATE_PROVIDER', updateProvider);
	yield takeLatest('GET_ALL_PROVIDERS', getAllProviders);
	yield takeLatest('DELETE_PROVIDER', deleteProviders);
	yield takeLatest('GET_FILTERED_PROVIDERS', getFilteredProviders);
}

export default providerSaga;