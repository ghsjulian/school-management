import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FcMenu } from "react-icons/fc";

const Header = () => {
    const navRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const openNav = () => {
        setOpen(!isOpen);
    };
    return (
        <>
            <header>
                <div className="logo">School-Management</div>
                <div className="desk-top">
                    <NavLink to="/admin-profile">
                        <img src="./icons/profile.png" alt="User Profile" />
                    </NavLink>
                    <NavLink to="/">
                        <img src="./icons/bell.png" alt="User Notification" />
                        <span>4</span>
                    </NavLink>
                    <NavLink to="/">
                        <img src="./icons/logout.png" alt="User Logout" />
                    </NavLink>
                </div>
                <button onClick={openNav}>
                    {
                        isOpen? <img src="./icons/cross.png" alt="Close" /> : <img src="./icons/menu--1.png" alt="Menu" />
                    }
                </button>
            </header>
            <div ref={navRef} className={isOpen && "side-bar-on"}>
                <Sidebar />
            </div>
            {isOpen && <div onClick={openNav} className="overly"></div>}
        </>
    );
};

export default Header;
