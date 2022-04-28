import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { campsiteActions } from '../reducers/campsiteReducer.ts';
import { addApi } from '../api/campsiteApi.ts'

interface CampsiteAddType{
  type: string;
  payload: {
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

interface CampsiteAddSuccessType {
  type: string;
  payload: {
    ok: string
  }
}

function* add(campsite: CampsiteAddType){
  try {
    const response : CampsiteAddSuccessType = yield addApi(campsite.payload)
    yield put(campsiteActions.addSuccess(response))
  } catch (err) {
    yield put(campsiteActions.addFail(err))
  }
}

export function* watchAdd(){
  yield takeLatest(campsiteActions.addRequest, add)
}