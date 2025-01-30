const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret_key = process.env.SECRET_KEY;
const expires_in = process.env.EXPIRES_IN;

const makeHash = async(password)=>{
    const salt = await bcrypt.genSaltSync(10)
    const hashed = await bcrypt.hashSync(password,salt)
    return hashed
}
const matchHashed = async(hashed, password)=>{
    try {
        return bcrypt.compareSync(password,hashed)
    } catch (error) {
        return error.message
    }
}


module.exports = {
    makeHash,matchHashed
}