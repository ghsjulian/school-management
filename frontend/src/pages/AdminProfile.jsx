import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/styles.css";

const AdminProfile = () => {
    return (
        <div className="admin-profile">
            <div className="view-profile">
                <img src="./icons/teacher.png" alt="Admin" />
                <h2>Ghs Julian</h2>
                <div className="admin-info">
                    <div className="flex-info">
                        <p>Designation : </p>
                        <p>Admin</p>
                    </div>
                    <div className="flex-info">
                        <p>Email : </p>
                        <p>ghsjulian@gmail.com</p>
                    </div>
                    <div className="flex-info">
                        <p>Phone : </p>
                        <p>+880130266****</p>
                    </div>
                    <div className="flex-info">
                        <p>Address : </p>
                        <p>Washington DC</p>
                    </div>
                </div>
            </div>
            <div className="edit-profile">
                <h2>Edit Admin Profile</h2>
                <div className="user-photo">
                    <img src="./icons/scan-user.png" alt="Select Photo" />
                    <label htmlFor="select-photo">+</label>
                </div>
                <span id="info-message" className="error">
                    Please Enter User Name
                </span>

                <input type="text" placeholder="Enter Admin Name" />
                <input type="email" placeholder="EnterAdmin Email" />
                <input type="telephone" placeholder="Enter Admin Phone" />
                <input type="text" placeholder="Enter Address" />
                <input type="password" placeholder="Enter Old Password" />
                <input type="text" placeholder="Enter New Password" />

                <button className="submit-form">Create Teacher</button>
            </div>
        </div>
    );
};

export default AdminProfile;
