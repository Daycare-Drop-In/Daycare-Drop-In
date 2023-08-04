import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// aws is hooked up on user router to handle user profile uploading on registration,
// awsCache is a server side variable at /api/user/aws that holds the photo url returned from the S3 bucket.
// the route is the same for all registration forms because the actual file upload to S3 happens immediately
// and is not dependent on the registration form being submitted.

function* registrationPhoto(action){
    console.log('INSIDE REGISTRATION AWS action.payload:', action.payload);
    try {
        const newFile = action.payload.file;
        console.log('newFile', newFile)
        const data = new FormData(); //declare FormData
        data.append('file', newFile) // this data contains this file and contains this header
        yield console.log('Post new files to /api/user/aws', data);
       yield axios.put('/api/user/aws', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

    } catch (error) {
        console.log("PROBLEM WITH REGISTRATION AWS  ", error);

    }
}

function* childPhoto(action){
    console.log('INSIDE CHILD AWS action.payload:', action.payload);
    try {
         const newFile = action.payload.file;
        console.log('newFile', newFile)
        const data = new FormData(); //declare FormData
        data.append('file', newFile) // this data contains this file and contains this header
        yield console.log('Post new files to /api/child/aws', data);
       yield axios.put('/api/child/aws', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

    } catch (error) {
        console.log("PROBLEM WITH CHILD AWS ", error);

    }
}
function* adultPhoto(action){
    console.log('INSIDE ADULT AWS action.payload:', action.payload);
    try {

    } catch (error) {
        console.log("PROBLEM WITH ADULT AWS", error);

    }
}
function* providerGallery(action) {
	console.log("INSIDE PROVIDER AWS action.payload:", action.payload);
	try {
	} catch (error) {
		console.log("PROBLEM WITH PROVIDER AWS", error);
	}
}



function* awsSaga() {
	yield takeLatest("AWS_REG_PHOTO", registrationPhoto);
	yield takeLatest("AWS_CHILD_PHOTO", childPhoto);
	yield takeLatest("AWS_ADULT_PHOTO", adultPhoto);
	yield takeLatest("AWS_PROVIDER_GALLERY", providerGallery);
}

export default awsSaga;


        // yield put({ type: 'SET_UPLOADS', payload: response.data})