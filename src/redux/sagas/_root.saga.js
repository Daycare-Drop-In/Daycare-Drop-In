import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import bookings from './booking.saga';
import children from './children.saga';
import family from './family.saga'
import filterList from './list_filtering.saga'
import photos from './photos.saga'
import provider from './provider.saga'
import responsibleAdult from './responsible_adult.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    bookings(),
    children(),
    family(),
    filterList(),
    photos(),
    provider(),
    responsibleAdult()
  ]);
}
