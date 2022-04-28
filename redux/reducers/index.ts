import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import campsites from "./campsiteReducer.ts";

const rootReducer = (state:any, action:any) => {
  if (action.type === HYDRATE) {
    return {
      ...state, 
      ...action.payload,
    }
  }
  return combineReducers({
    campsites
  })(state, action)
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>