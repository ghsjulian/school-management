const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/is.admin")
const AuthController = require("../controllers/auth.controller");

router.post("/auth/signup", AuthController.adminSignup);
router.post("/auth/login", AuthController.adminLogin);
router.get("/auth/get-admin", isAdmin,AuthController.getAdmin);

module.exports = router;
