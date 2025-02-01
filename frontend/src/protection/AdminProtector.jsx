import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const AdminProtector = () => {
    const { isLogin, getToken, getUser } = useAuth();
    return <>{isLogin && getToken() !== null ? children : <Navigate to="/admin-login" />}</>;
};

export default AdminProtector;
