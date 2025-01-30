import React from "react";

const AddStudent = () => {
    return (
        <div className="add-user">
            <div className="container">
                {/*<h2>Add New Student </h2>*/}
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
                        <label htmlFor="user-name">Student Name : </label>
                        <input id="user-name" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Student Email : </label>
                        <input id="email" type="email" />
                    </div>
                    <div className="input">
                        <label htmlFor="phone">Phone Number : </label>
                        <input id="phone" type="telephone" />
                    </div>
                    <div className="input">
                        <label htmlFor="rool">Student Rool : </label>
                        <input id="rool" type="number" />
                    </div>
                    <div className="input">
                        <label htmlFor="gender">Student Gender : </label>
                        <input id="gender" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="class">Student Class : </label>
                        <input id="class" type="text" />
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
                        <label htmlFor="dept">Student Department : </label>
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
                        <label htmlFor="village">Student Village : </label>
                        <input id="village" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="post">Student Post : </label>
                        <input id="post" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="district">Student District : </label>
                        <input id="district" type="text" />
                    </div>
                    <div className="input">
                        <label htmlFor="division">Student Division : </label>
                        <input id="division" type="text" />
                    </div>
                </div>
                <button className="submit-form">
                Create Student
                </button>
            </div>
        </div>
    );
};

export default AddStudent;
