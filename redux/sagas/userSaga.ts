import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { userActions } from "../reducers/userReducer.ts";
import { signupApi, loginApi, logoutApi } from "../api/userApi.ts";

interface UserSignupType {
  type: string;
  payload: {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
  };
}
interface UserLoginType {
  type: string;
  payload: {
    userid: string;
    password: string;
  };
}
interface UserSignupSuccessType {
  type: string;
  payload: {
    userid: string;
  };
}

interface UserLoginSuccessType {
  type: string;
  payload: {
    userid: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
  };
}

function* signup(user: UserSignupType) {
  try {
    const response: UserSignupSuccessType = yield signupApi(user.payload);
    yield put(userActions.signupSuccess(response));
  } catch (error) {
    yield put(userActions.signpuFailure(error));
  }
}
export function* watchSignup() {
  yield takeLatest(userActions.signupRequest, signup);
}

function* login(login: UserLoginType) {
  try {
    const response: UserLoginSuccessType = yield loginApi(login.payload);
    yield put(userActions.loginSuccess(response));
    window.location.href = "/";
  } catch (error) {
    yield put(userActions.loginFailure(error));
  }
}
export function* watchLogin() {
  yield takeLatest(userActions.loginRequest, login);
}

function* logout() {
  try {
    const response: UserLoginSuccessType = yield logoutApi();
    yield put(userActions.logoutSuccess(response));
  } catch (error) {
    console.log(error);
  }
}
export function* watchLogout() {
  yield takeLatest(userActions.logoutRequest, logout);
}
