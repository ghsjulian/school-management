const utils = require("../utils/config");
const adminModel = require("../models/admin.model");

const isAdmin = async (req, res) => {
    console.log("Cookie, ", req.cookies);
};


module.exports = isAdmin