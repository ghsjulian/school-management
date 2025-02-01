const Utils = require("../utils/config");
const adminModel = require("../models/admin.model");
const api = process.env.API;

class AuthController {
    async adminSignup(req, res) {
        const { name, email, phone, password } = req.body;
        // const avatar = req.file.filename;
        // Create Validation
        try {
            if (name === "" && email === "" && password === "") {
                return res.json({
                    code: 403,
                    status: false,
                    error: true,
                    success: false,
                    loc: "name",
                    message: "All Fields Are Required"
                });
            } else if (name === "") {
                return res.json({
                    code: 403,
                    status: false,
                    error: true,
                    success: false,
                    loc: "name",
                    message: "User Name Is Required"
                });
            } else if (email === "") {
                return res.json({
                    code: 403,
                    status: false,
                    error: true,
                    success: false,
                    loc: "email",
                    message: "Email Is Required"
                });
            } else if (password === "") {
                return res.json({
                    code: 403,
                    status: false,
                    error: true,
                    success: false,
                    loc: "password",
                    message: "Password Is Required"
                });
            } else if (password.length < 5) {
                return res.json({
                    code: 403,
                    status: false,
                    error: true,
                    success: false,
                    loc: "password",
                    message: "Password Will Be 6<"
                });
            } else {
                // If Everything Is Okay
                const isExist = await adminModel.findOne({
                    email
                });
                if (isExist) {
                    throw new Error("User Already Registered !");
                } else {
                    const hashedPassword = await Utils.makeHash(password);
                    const newUser = await new adminModel({
                        name,
                        email,
                        password: hashedPassword,
                        avatar: api + "/users/admin.png"
                    });
                    if (await newUser.save()) {
                        const currentID = newUser._id;
                        const token = await Utils.encodeJWT({
                            id: currentID,
                            name,
                            email
                        });
                        const updateToken = await adminModel.findOneAndUpdate(
                            { email: email },
                            { token: token }
                        );
                        if (updateToken) {
                            let user = {
                                id: currentID,
                                name,
                                email,
                                token,
                                contacts: newUser.contacts,
                                avatar: newUser.avatar
                            };
                            return res.json({
                                cose: 201,
                                success: true,
                                status: "success",
                                message: "Admin Registration Successfully!"
                            });
                        } else {
                            throw new Error("Admin Registration Faild!");
                        }
                    } else {
                        throw new Error("Error While Creating Admin!");
                    }
                }
            }
        } catch (error) {
            return res.json({
                code: 505,
                status: false,
                error: true,
                success: false,
                message: error.message || "Server Timeout Error"
            });
        }
    }
    async adminLogin(req, res) {
        const { email, password } = req.body;
        // Check Validation
        if (email.trim() === "" && password.trim() === "") {
            return res.json({
                code: 403,
                status: false,
                error: true,
                success: false,
                loc: "email",
                message: "All Fields Are Required"
            });
        } else if (email.trim() === "") {
            return res.json({
                code: 403,
                status: false,
                error: true,
                success: false,
                loc: "email",
                message: "Email Is Required"
            });
        } else if (password.trim() === "") {
            return res.json({
                code: 403,
                status: false,
                error: true,
                success: false,
                loc: "password",
                message: "Password Is Required"
            });
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                email.trim()
            )
        ) {
            return res.json({
                code: 403,
                status: false,
                error: true,
                success: false,
                loc: "email",
                message: "Invalid Email Address"
            });
        } else if (password.trim().length < 5) {
            return res.json({
                code: 403,
                status: false,
                error: true,
                success: false,
                loc: "password",
                message: "Password Will Be 6<"
            });
        } else {
            // If Everything Is Okay
            try {
                const isExist = await adminModel.findOne({
                    email
                });
                if (isExist) {
                    if (isExist.email === email.trim()) {
                        const isOkPassword = await Utils.matchHashed(
                            isExist.password,
                            password
                        );
                        if (isOkPassword) {
                            const id = isExist._id;
                            const name = isExist.name;
                            const email = isExist.email;
                            const token = await Utils.encodeJWT({
                                id,
                                name,
                                email
                            });
                            const update = await adminModel.findOneAndUpdate(
                                { email: email },
                                { token: token }
                            );
                            if (update) {
                                const user = {
                                    id: isExist._id,
                                    name: isExist.name,
                                    email: isExist.email,
                                    avatar: isExist.avatar,
                                    contacts: isExist.contacts,
                                    token: isExist.token
                                };
                                return await Utils.setCookie(res, token, user);
                            } else {
                                throw new Error("Login Faild Please Try Again");
                            }
                        } else {
                            throw new Error("Invalid Email Or Password");
                        }
                    } else {
                        throw new Error("Invalid Credentials");
                    }
                } else {
                    throw new Error("Invalid Admin Credentials");
                }
            } catch (error) {
                console.log(error)
                return res.json({
                    code: 505,
                    status: false,
                    error: true,
                    success: false,
                    message: error.message || "505 - Server Timeout Error"
                });
            }
        }
    }
    async getAdmin(req,res){
        console.log("Get Admin")
    }
}
module.exports = new AuthController();
