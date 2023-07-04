const asyncHandler = require("express-async-handler");
const sessionModel = require("../models/session");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userIsValid = sessionModel.login(email, password);
  if (!userIsValid) {
    res
      .status(401)
      .res.json({ message: "Unauthorized, check credentials and try again" });
  }
  res
    .status(201)
    .json({ message: "special token was created", token: userIsValid });
});

const logout = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const isDeleted = sessionModel.logout(token);
  res
    .status(204)
    .json({ message: "The user's token was deleted or there is no content" });
});

module.exports = {
  login,
  logout,
};
