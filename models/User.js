const mongoose = require('mongoose');

// Define a Mongoose schema and model for your collection
const UserSchema = new mongoose.Schema({
  customer_id: Number,
  name: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  created_at: {
    type: Date,
    default: Date.now, // This will store the current date and time in ISO format
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
