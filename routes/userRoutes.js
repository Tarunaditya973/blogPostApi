const express = require("express");
const router = express.Router();

const { SignUp, login } = require("../controllers/userController");

router.post("/signin", SignUp);
router.post("/login", login);

module.exports = router;
