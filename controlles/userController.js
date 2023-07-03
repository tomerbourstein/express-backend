const asyncHandler = require("express-async-handler");
const userModel = require("../models/users");

const getUsers = asyncHandler(async (req, res) => {
  const users = userModel.getUsers();
  console.log(users);
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.query;
  const parsedId = parseInt(id);
  const user = userModel.getUserById(parsedId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  console.log(user);
  res.json(user);
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
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: `uid:${req.params.id} has been updated` });
});

const deleteUser = asyncHandler(async (req, res) => {
  const uid = parseInt(req.params.id);
  const deletedUser = userModel.deleteUser(uid);
  console.log(uid);
  if (!deletedUser) {
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
