const asyncHandler = require("express-async-handler");
const userModel = require("../models/users");

const getUsers = asyncHandler(async (res, req) => {
  const users = userModel.getUsers();

  res.json(users); //  remove string
});

const getUserById = asyncHandler(async (res, req) => {
  const { id } = req.query;
  const parsedId = parseInt(id);
  const user = userModel.getUserById(parsedId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.json(user); // remove string
});

const addUser = asyncHandler(async (req, res) => {
  const enteredUserData = req.body;
  const newUser = userModel.addUser(enteredUserData);
  if (!enteredUserData) {
    res.status(409).json({
      message: "Resource is not compatible with the request",
      newUser,
    });
  }
  res.status(201).json({ message: "User created successfully" });
});

const updateUser = asyncHandler(async (req, res) => {
  const enteredUserData = req.body;
  const updatedUserData = userModel.updateUser(
    parseInt(req.params.id),
    enteredUserData
  );
  if (!updatedUserData) {
    // remove string
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: `uid:${req.params.id} has been updated` });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const deletedUser = userModel.deleteUser(id);
  if (!deletedUser) {
    // remove string
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: `uid${req.params.id} has been deleted` });
});

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
