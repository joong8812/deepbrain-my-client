
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
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        signupSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        signupFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload){
            alert('진행 2: 리듀서 내부 - login') 
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