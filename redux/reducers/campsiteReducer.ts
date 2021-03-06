import { createSlice } from "@reduxjs/toolkit";

export interface CampsiteType {
  id: string;
  name: string;
  type: string;
  address: string;
  glamping: string;
  caravan: string;
  toilet: string;
  shower: string;
  wash: string;
}

export interface CampsiteState {
  loading: boolean;
  data: CampsiteType[];
  error: any;
}

const initialState: CampsiteState = {
  loading: false,
  data: [],
  error: null,
};

const campsiteSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {
    addRequest(state: CampsiteState, payload) {
      state.loading = true;
    },
    addSuccess(state: CampsiteState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      window.location.href = '/campsite/list'
    },
    addFail(state: CampsiteState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    updateRequest(state: CampsiteState, payload) {
      state.loading = true;
    },
    updateSuccess(state: CampsiteState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      window.location.href = '/campsite/list'
    },
    updateFail(state: CampsiteState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    deleteRequest(state: CampsiteState, payload) {
      state.loading = true;
    },
    deleteSuccess(state: CampsiteState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      window.location.href = '/campsite/list'
    },
    deleteFail(state: CampsiteState, { payload }) {
      state.data = payload;
      state.loading = false;
    },
  },
});

const { reducer, actions } = campsiteSlice;
export const campsiteActions = actions;
export default reducer;
