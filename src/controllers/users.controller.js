const User = require("../models/users.model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUsers = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const destroyUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.json("User deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUsers,
  destroyUser,
};
