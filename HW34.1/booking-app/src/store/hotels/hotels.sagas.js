import { call, put, takeEvery } from 'redux-saga/effects';
import { setHotels } from './hotels.slice'; 
import { fetchHotels } from './hotels.actions'; 
import { apiFetchHotels } from '../../services/api'; 

function* fetchHotelsSaga(action) {
  try {
    const hotels = yield call(apiFetchHotels, action.payload);
    yield put(setHotels(hotels));
  } catch (error) {
    console.error(error);
  }
}

export function* watchFetchHotelsSagas() {
  yield takeEvery(fetchHotels, fetchHotelsSaga);
}
