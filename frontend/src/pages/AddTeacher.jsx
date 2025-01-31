import React from "react";

const AddTeacher = () => {
    return (
        <div className="add-user">
            <div className="container">
                {/*<h2>Add New Teacher </h2>*/}
                <div className="user-photo">
                    <img src="./icons/scan-user.png" alt="Select Photo" />
                    <label htmlFor="select-photo">+</label>
                </div>
                <span id="message" className="error">
                    Please Enter User Name
                </span>
                <h3>Add Basic Information : </h3>
                <div className="form">
                    <div className="input">
                        <label htmlFor="user-name">Teacher Name : </label>
                        <input id="user-name" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Teacher Email : </label>
                        <input id="email" type="email" />
                    </div>
                    <div className="input">
                        <label htmlFor="phone">Phone Number : </label>
                        <input id="phone" type="telephone" />
                    </div>
                   
                    <div className="input">
                        <label htmlFor="gender">Teacher Gender : </label>
                        <input id="gender" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="father-name">Father's Name : </label>
                        <input id="father-name" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="mother-name">Mother's Name : </label>
                        <input id="mother-name" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="dept">Teacher Department : </label>
                        <input id="dept" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="school-name">School's Name: </label>
                        <input id="school-name" type="text" />
                    </div>
                </div>
                <h3>Add Permanent Addresses : </h3>
                <div className="form">
                    <div className="input">
                        <label htmlFor="village">Teacher Village : </label>
                        <input id="village" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="post">Teacher Post : </label>
                        <input id="post" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="district">Teacher District : </label>
                        <input id="district" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="division">Teacher Division : </label>
                        <input id="division" type="text" />
                    </div>
                </div>
                <button className="submit-form">Create Teacher</button>
            </div>
        </div>
    );
};

export default AddTeacher;
