import { put, takeLatest } from 'redux-saga/effects'
import { campsiteActions } from '../reducers/campsiteReducer.ts';
import { addApi, updateApi } from '../api/campsiteApi.ts'

interface CampsiteType{
  type: string;
  payload: {
    id: string,
    name: string,
    type: string,
    address: string,
    glamping: string,
    caravan: string,
    toilet: string,
    shower: string,
    wash: string
  }
}

interface CampsiteCUSuccessType {
  type: string;
  payload: {
    ok: string
  }
}

function* add(campsite: CampsiteType){
  try {
    const response : CampsiteCUSuccessType = yield addApi(campsite.payload)
    yield put(campsiteActions.addSuccess(response))
  } catch (err) {
    yield put(campsiteActions.addFail(err))
  }
}

export function* watchAdd(){
  yield takeLatest(campsiteActions.addRequest, add)
}

function* update(campsite: CampsiteType){
  try {
    const response : CampsiteCUSuccessType = yield updateApi(campsite.payload)
    yield put(campsiteActions.updateSuccess(response))
  } catch (err) {
    yield put(campsiteActions.updateFail(err))
  }
}

export function* watchUpdate(){
  yield takeLatest(campsiteActions.updateRequest, update)
}