
import { createSlice } from "@reduxjs/toolkit"

export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        signupRequest(state: UserState, payload){
            state.loading = true; 
        },
        signupSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            window.location.href = '/user/login'
        },
        signupFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload){
            state.loading = true; 
        },
        loginSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;  
        },
        loginFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        logoutRequest(state: UserState, payload){
            state.loading = false; 
        },
        logoutSuccess(state: UserState, {payload}){ 
            state.loading = false;
            localStorage.clear()
            window.location.href = '/'
        },
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer