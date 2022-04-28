import { put, takeLatest } from 'redux-saga/effects'
import { campsiteActions } from '../reducers/campsiteReducer.ts';
import { addApi, updateApi, deleteApi } from '../api/campsiteApi.ts'

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

interface CampsiteCUDSuccessType {
  type: string;
  payload: {
    ok: string
  }
}

function* addCampsite(campsite: CampsiteType){
  try {
    const response : CampsiteCUDSuccessType = yield addApi(campsite.payload)
    yield put(campsiteActions.addSuccess(response))
  } catch (err) {
    yield put(campsiteActions.addFail(err))
  }
}

export function* watchAdd(){
  yield takeLatest(campsiteActions.addRequest, addCampsite)
}

function* updateCampsite(campsite: CampsiteType){
  try {
    const response : CampsiteCUDSuccessType = yield updateApi(campsite.payload)
    yield put(campsiteActions.updateSuccess(response))
  } catch (err) {
    yield put(campsiteActions.updateFail(err))
  }
}

export function* watchUpdate(){
  yield takeLatest(campsiteActions.updateRequest, updateCampsite)
}

function* deleteCampsite(campsite: CampsiteType){
  try {
    const response : CampsiteCUDSuccessType = yield deleteApi(campsite.payload)
    yield put(campsiteActions.deleteSuccess(response))
  } catch (err) {
    yield put(campsiteActions.delteFail(err))
  }
}

export function* watchDelete(){
  yield takeLatest(campsiteActions.deleteRequest, deleteCampsite)
}