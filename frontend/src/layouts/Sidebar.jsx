import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ openNav }) => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <aside>
            <h3>Main Menu</h3>
            <NavLink
                className={path === "/" ? "active-nav" : ""}
                onClick={openNav}
                to="/"
            >
                <img src="./icons/dashboard.png" alt="User Profile" />
                <span>Admin Dashboard </span>
            </NavLink>
            <NavLink
                className={path === "/admin-profile" ? "active-nav" : ""}
                onClick={openNav}
                to="/admin-profile"
            >
                <img src="./icons/profile.png" alt="User Profile" />
                <span>Admin Profile </span>
            </NavLink>
            <NavLink
                className={path === "/notification" ? "active-nav" : ""}
                onClick={openNav}
                to="/notification"
            >
                <img src="./icons/bell.png" alt="User Profile" />
                <span>Notifications </span>
                <small>3</small>
            </NavLink>
            <NavLink
                className={path === "/add-student" ? "active-nav" : ""}
                onClick={openNav}
                to="/add-student"
            >
                <img src="./icons/add-student-2.png" alt="User Profile" />
                <span>Add Student </span>
            </NavLink>
            <NavLink
                className={path === "/add-teacher" ? "active-nav" : ""}
                onClick={openNav}
                to="/add-teacher"
            >
                <img src="./icons/add-teacher.png" alt="User Profile" />
                <span>Add Teacher </span>
            </NavLink>
            <NavLink
                className={path === "/view-teacher" ? "active-nav" : ""}
                onClick={openNav}
                to="/view-teacher"
            >
                <img src="./icons/teacher.png" alt="User Profile" />
                <span>View All Teachers </span>
            </NavLink>
            <NavLink
                className={path === "/view-student" ? "active-nav" : ""}
                onClick={openNav}
                to="/view-student"
            >
                <img src="./icons/student.png" alt="User Profile" />
                <span>View All Students </span>
            </NavLink>
            <NavLink
            className={path === "/add-marksheet" ? "active-nav" : ""}
            onClick={openNav} to="/add-marksheet">
                <img src="./icons/add-marksheet.png" alt="User Profile" />
                <span>Add Marksheet </span>
            </NavLink>
            <NavLink className={path === "/settings" ? "active-nav" : ""} onClick={openNav} to="/settings">
                <img src="./icons/settings.png" alt="User Profile" />
                <span>Settings</span>
            </NavLink>
            <NavLink className={path === "/about-us" ? "active-nav" : ""} onClick={openNav} to="/about-us">
                <img src="./icons/about.png" alt="User Profile" />
                <span>About US</span>
            </NavLink>
            <NavLink className={path === "/contact-us" ? "active-nav" : ""} onClick={openNav} to="/contact-us">
                <img src="./icons/contact.png" alt="User Profile" />
                <span>Contact US </span>
            </NavLink>
            <NavLink className={path === "/report-us" ? "active-nav" : ""} onClick={openNav} to="/report-us">
                <img src="./icons/report.png" alt="User Profile" />
                <span>Report US</span>
            </NavLink>
            <NavLink onClick={openNav} to="/">
                <img src="./icons/logout.png" alt="User Profile" />
                <span>Logout</span>
            </NavLink>
        </aside>
    );
};

export default Sidebar;
