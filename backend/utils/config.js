const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret_key = process.env.SECRET_KEY;
const expires_in = process.env.EXPIRES_IN;

const makeHash = async password => {
    const salt = await bcrypt.genSaltSync(10);
    const hashed = await bcrypt.hashSync(password, salt);
    return hashed;
};
const matchHashed = async (hashed, password) => {
    try {
        return bcrypt.compareSync(password, hashed);
    } catch (error) {
        return error.message;
    }
};
const encodeJWT = async payload => {
    return jwt.sign(payload, secret_key, { expiresIn:expires_in });
};
const decodeJWT = async token => {
    try {
        return jwt.verify(token, secret_key);
    } catch (err) {
        return null;
    }
};
const setCookie = async (res, value, data) => {
    return res
        .cookie("school_managment", value, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/"
        })
        .status(200)
        .json({
            user: data,
            code: 200,
            status: "success",
            error: false,
            success: true,
            message: "Admin Logged In Successfully"
        });
};

module.exports = {
    makeHash,
    matchHashed,
    encodeJWT,
    decodeJWT,
    setCookie
};
