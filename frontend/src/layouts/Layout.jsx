import Header from "./Header";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/layouts.css";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
               <Outlet/>
            </main>
        </>
    );
};

export default Layout;
