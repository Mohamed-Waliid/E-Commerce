const User = require('../DB/models/userModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError'); 
const bcrypt = require('bcryptjs');

//Create user
exports.createUser = asyncHandler(async (req, res) => {

if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 12);
}

  const user = await User.create(req.body);
  res.status(201).json({ 
    status: 'success', 
    data: user 
});
});

//Get all users
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ 
    status: 'success', 
    results: users.length, 
    data: users 
    });
});

//Get user by ID
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new ApiError(`No user found with ID ${req.params.id}`, 404));
  res.status(200).json({ 
    status: 'success', 
    data: user 
    });
});

//Update user
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return next(new ApiError(`No user found with ID ${req.params.id}`, 404));
  res.status(200).json({ 
    status: 'success', 
    data: user 
    });
});

//Delete user
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return next(new ApiError(`No user found with ID ${req.params.id}`, 404));
  res.status(200).json({ 
    status: 'success', 
    message: 'User deleted successfully', 
    data: null 
    });
});
