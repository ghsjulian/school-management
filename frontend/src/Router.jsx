import { Navigate } from "react-router-dom";

import AdminProtector from "./protection/AdminProtector";
import NotFound from "./pages/404";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import AdminProfile from "./pages/AdminProfile";
import Notification from "./pages/Notification";

const myRoutes = [
    {
        path: "/",
        element: (
            <AdminProtector>
                <Layout />
            </AdminProtector>
        ),
        children: [
            {
                index: true,
                path: "",
                element: (
                    <AdminProtector>
                        <Dashboard />
                    </AdminProtector>
                )
            },
            {
                path: "/add-student",
                element: <AdminProtector><AddStudent /></AdminProtector>
            },
            {
                path: "/add-teacher",
                element: <AdminProtector><AddTeacher /></AdminProtector>
            },
            {
                path: "/admin-profile",
                element: <AdminProtector><AdminProfile /></AdminProtector>
            },
            {
                path: "/notification",
                element: <AdminProtector><Notification /></AdminProtector>
            }
        ]
    },
    {
        path: "/admin-login",
        element: <AdminLogin />
    },
    {
        path: "*",
        element: <NotFound />
    }
];

export default myRoutes;
