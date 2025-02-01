import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState
} from "react";
import { Navigate } from "react-router-dom";
export const api = import.meta.env.VITE_API_URL;


// Initial state
const initialState = {
    isLogin: false,
    user: null,
    token : null
};
// Action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer function
const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                user: null
            };
        default:
            return state;
    }
};

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const isLogin = state.isLogin;
    const api = import.meta.env.VITE_API_URL;
    
    
    const setLogin = userDetails => {
        dispatch({ type: LOGIN, payload: userDetails });
    };

    const logout = () => {
        dispatch({ type: LOGOUT });
    };

    const getUser = () => {
        return state.user;
    };
    const getToken = () => {
        return state.token;
    };

    return (
        <AuthContext.Provider
            value={{ state, setLogin, logout, getUser,getToken,api, isLogin}}
        >
            {children}
        </AuthContext.Provider>
    );
};
