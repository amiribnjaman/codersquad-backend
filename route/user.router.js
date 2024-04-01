const express = require("express");
const { signupUser, loginUser} = require("../controller/user.controller");
const router = express.Router();

// Router
router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
