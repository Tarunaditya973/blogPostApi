const { createBlog } = require("../controllers/blogController");
const express = require("express");
const router = express.Router();

router.post("/create-blog", createBlog);

module.exports = router;
