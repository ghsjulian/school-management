import React from 'react'
import {NavLink} from "react-router-dom"


const Dashboard = () => {
  return (
     <div className="grid-container">
                    <NavLink to="/" className="grid-item">
                        <img src="./icons/report.png" alt="Report" />
                        <h4>Student Statics</h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/admin-profile">
                        <img src="./icons/profile.png" alt="User Profile" />
                        <h4>Admin Profile </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/certificate.png" alt="User Profile" />
                        <h4>Certification</h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/add-student">
                        <img
                            src="./icons/add-student-2.png"
                            alt="User Profile"
                        />
                        <h4>Add New Student </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/teacher.png" alt="User Profile" />
                        <h4>View All Teachers </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/student.png" alt="User Profile" />
                        <h4>View All Students </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img
                            src="./icons/add-marksheet.png"
                            alt="User Profile"
                        />
                        <h4>Add Marksheet </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/book.png" alt="User Profile" />
                        <h4>Books</h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/settings.png" alt="User Profile" />
                        <h4>Settings</h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/about.png" alt="User Profile" />
                        <h4>About US</h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/contact.png" alt="User Profile" />
                        <h4>Contact US </h4>
                    </NavLink>
                    <NavLink className="grid-item" to="/">
                        <img src="./icons/report.png" alt="User Profile" />
                        <h4>Report US</h4>
                    </NavLink>
                     <NavLink className="grid-item" to="/">
                        <img src="./icons/managers.png" alt="User Profile" />
                        <h4>Our Managers</h4>
                    </NavLink>
                     <NavLink className="grid-item" to="/">
                        <img src="./icons/keep-note.png" alt="User Profile" />
                        <h4>Keep Notes</h4>
                    </NavLink>
                     <NavLink className="grid-item" to="/">
                        <img src="./icons/school.png" alt="User Profile" />
                        <h4>Our School</h4>
                    </NavLink>
                     <NavLink className="grid-item" to="/">
                        <img src="./icons/teaching.png" alt="User Profile" />
                        <h4>Our Classes</h4>
                    </NavLink>
                </div>
  )
}

export default Dashboard