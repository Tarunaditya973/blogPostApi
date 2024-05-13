const jwt = require("jsonwebtoken");

module.exports.authenticateUser = (req, res, next) => {
  const token = req.header["authorization"];
  if (!token) {
    res.status(401).send("Access denied. Please sign in to continue");
  }
  try {
    const decoded = jwt.verify(token, "isjfisjeflsjefisjefilsjfijslifj");
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Error", err);
    return res.status(400).send("Invalid Token.");
  }
};
