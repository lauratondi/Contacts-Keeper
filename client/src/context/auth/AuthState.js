import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';



const authState = props => {
    const initialState = {
        toekn: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };

    // Now we pull out the state and dispatch from our reducer by using the useReducer Hook
    // State allow us to access anything is in our state and dispatch allow us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(authtReducer, initialState);

    // Load User

    // Register User

    // Login User

    // Logout

    // Clear Errorrs


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                loading: state.loading,
                error: state.error,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;