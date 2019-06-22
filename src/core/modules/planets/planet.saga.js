import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from './Planets.actions'

function* loadPlanets(action) {
  try {
    const results = yield call(axios.get, 'https://swapi.co/api/planets/')

    yield put({
      type: actionTypes.LOAD_PLANETS_SUCCESS,
      payload: results.data.results
    })
  } catch (error) {
    yield put({
      type: actionTypes.LOAD_PLANETS_FAILURE
    })
  }
}

function* respuestaCorrecta(action) {
  yield put({
    type: "YOLO",
    payload: action.payload
  })
}

function* loadPlanetsWatcher() {
  yield takeEvery(actionTypes.LOAD_PLANETS, loadPlanets)
  yield takeEvery('X_SOMOS_CHAVOS', respuestaCorrecta)
}

export default loadPlanetsWatcher