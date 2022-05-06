import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
export default function Logout(){
    const dispatch = useDispatch()
    dispatch(userActions.logoutRequest())
    return <></>
}    