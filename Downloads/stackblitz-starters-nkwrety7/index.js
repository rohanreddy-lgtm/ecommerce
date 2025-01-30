const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Profile schema as an embedded document
const ProfileSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

// Define the User schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String], // Array of strings to represent different roles
    default: ['user'] // Default role is 'user'
  },
  profile: {
    type: ProfileSchema,
    required: true // Embed the Profile schema and make it required
  },
  lastLogin: {
    type: Date
  }
});

// Create a model for the User schema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;