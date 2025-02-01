import { useAuth } from "../auth/useAuth";
import React, { useState } from "react";
import axios from "axios";

const useLogin = () => {
    const [isLoading, setLoading] = useState(false);
    const { api, setLogin } = useAuth();

    const adminLogin = async data => {
        try {
            setLoading(true);
            const response = await axios.post(`${api}/user-login`, data, {
                withCredentials: true
            });
            if (response.data.success) {
                localStorage.setItem(
                    "admin",
                    JSON.stringify(response.data.user)
                );
                login(response.data.user);
                setLoading(false);
                return { type: true, message: response.data.message };
            } else {
                setLoading(false);
                throw new Error(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            return { type: false, message: error.message };
        } finally {
            setLoading(false);
        }
    };

    return { adminLogin, isLoading };
};

export default useLogin;
