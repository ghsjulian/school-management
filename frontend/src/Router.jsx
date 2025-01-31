import { Navigate } from "react-router-dom";

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
        element: <Layout />,
        children: [
            {
                index: true,
                path: "",
                element: <Dashboard />
            },
            {
                path: "/add-student",
                element: <AddStudent />
            },
            {
                path: "/add-teacher",
                element: <AddTeacher />
            },
            {
                path : "/admin-profile",
                element : <AdminProfile/>
            },
            {
               path : "/notification",
               element : <Notification/>
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
