import { all } from 'redux-saga/effects'
import { watchAdd } from './campsiteSaga.ts'

export default function* rootSaga(){
    yield all([watchAdd()])
}