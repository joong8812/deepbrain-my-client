import { all } from 'redux-saga/effects'
import { watchAdd, watchUpdate, watchDelete } from './campsiteSaga.ts'

export default function* rootSaga(){
    yield all([watchAdd(), watchUpdate(), watchDelete()])
}