import {
  takeLatest, all, call, put
} from 'redux-saga/effects';
import axios from '../axios';
import videoActionTypes from './video-action-types';
import { fetchVideoSuccess } from './video-actions';
import { foundError, showErrorModal } from '../error/error-actions';

function* fetchVideoWorker(action) {
  const { payload: { videoCode, history } } = action;
  try {
    const response = yield axios.get(`/videos/:${videoCode}`);
    const video = response.data
    yield put(call(fetchVideoSuccess, video));
  } catch (error) {
    yield put(foundError(error.response));
    yield put(showErrorModal())
  }
}

export function* fetchVideoWatcher() {
  yield takeLatest(videoActionTypes.FETCH_VIDEO_START, fetchVideoWorker);
}

export function* videoSagas() {
  yield all([
    call(fetchVideoWatcher)
  ]);
}
