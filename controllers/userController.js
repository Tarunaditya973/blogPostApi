const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.SignUp = async (req, res, next) => {
  const { username, email, password, firstName, lastName } = req.body;
  console.log("request", req.body);
  if (!username || !email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Check for existing user (optional, depending on your requirement)
    let existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Sign-up failed" }); // Generic error message
  }
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        return res.status(401).json({ message: "Invalid Password!" });
      }
      // Create token
      res.status(200).json({ message: "User Logged in succesfully" });
    }
  } catch (err) {
    next(err);
  }
};
