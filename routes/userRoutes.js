const express = require("express");
const router = express.Router();

const { SignUp, login, followUser } = require("../controllers/userController");

router.post("/signup", SignUp);
router.post("/login", login);
router.post("/follow-user/:followingId", followUser);

module.exports = router;
