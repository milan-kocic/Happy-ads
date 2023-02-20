const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, 'Please add a text field'],
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  adress: {
    type: String,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
  admin: {
    type: Boolean,
  },
});

module.exports = mongoose.model('User', UserSchema);
