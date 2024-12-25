// controllers/userController.js
const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { customer_id } = req.body;
    const existingUser = await User.findOne({ customer_id });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: `User already exists with Customer ID:` + customer_id,
      });
    }
    const user = new User(req.body);

    const savedUser = await user.save();
    res.status(201).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const totalCount = await User.countDocuments();

    res.status(200).json({
      success: true,
      users,
      totalRecords: totalCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: err,
    });
  }
};
