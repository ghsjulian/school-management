import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <h3>Main Menu</h3>
            <NavLink to="/">
                <img src="./icons/dashboard.png" alt="User Profile" />
                <span>Admin Dashboard </span>
            </NavLink>
            <NavLink to="/admin-profile">
                <img src="./icons/profile.png" alt="User Profile" />
                <span>Admin Profile </span>
            </NavLink>
            <NavLink className="active-nav" to="/">
                <img src="./icons/bell.png" alt="User Profile" />
                <span>Notifications </span>
                <small>3</small>
            </NavLink>
            <NavLink to="/add-student">
                <img src="./icons/add-student-2.png" alt="User Profile" />
                <span>Add Student </span>
            </NavLink>
            <NavLink to="/add-teacher">
                <img src="./icons/add-teacher.png" alt="User Profile" />
                <span>Add Teacher </span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/teacher.png" alt="User Profile" />
                <span>View All Teachers </span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/student.png" alt="User Profile" />
                <span>View All Students </span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/add-marksheet.png" alt="User Profile" />
                <span>Add Marksheet </span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/settings.png" alt="User Profile" />
                <span>Settings</span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/about.png" alt="User Profile" />
                <span>About US</span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/contact.png" alt="User Profile" />
                <span>Contact US </span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/report.png" alt="User Profile" />
                <span>Report US</span>
            </NavLink>
            <NavLink to="/">
                <img src="./icons/logout.png" alt="User Profile" />
                <span>Logout</span>
            </NavLink>
        </aside>
    );
};

export default Sidebar;
