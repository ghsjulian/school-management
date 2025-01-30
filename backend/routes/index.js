const express = require("express");
const router = express.Router();
const hashController = require("../controllers/hash.controller");

// For Tutorial And Learning...
router.get("/hash-password/:password", hashController.hashPassword);
router.get("/compare-hash/:hashed/:password", hashController.compareHashed);

module.exports = router;
