const Blog = require("../models/blogs.model");

module.exports.createBlog = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;
    console.log(req.body);
    const newBlog = new Blog({
      title: title,
      description: description,
      userId: userId,
    });
    const savedBlog = await newBlog.save();
    res.json({ msg: "Blog posted" });
  } catch (err) {
    next(err);
  }
};
