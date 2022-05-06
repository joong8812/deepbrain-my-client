import { all } from 'redux-saga/effects'
import { watchAdd, watchUpdate, watchDelete } from './campsiteSaga.ts'
import { watchSignup, watchLogin, watchLogout } from './userSaga.ts'

export default function* rootSaga(){
    yield all([watchAdd(), watchUpdate(), watchDelete(), watchSignup(), watchLogin(), watchLogout()])
}