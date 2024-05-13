const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, "isjfisjeflsjefisjefilsjfijslifj", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
