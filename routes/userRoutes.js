const express = require('express');
const router = express.Router();
const User = require('../models/User');

const users = [
  {
    firstName: 'Petar',
    lastName: 'Petrović',
    username: 'pera91',
    password: '111111',
    email: 'pera91@gmail.com',
    adress: 'Sinđelićeva 1',
    city: 'Niš',
    phoneNumber: '0641861991',
    gender: 'M',
    admin: true,
    id: 1,
  },
];
// get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ succes: true, data: users });
  } catch (error) {
    res.status(500).json({ succes: false, error: 'Something  went wrong' });
  }
});

// get one user

// router.get('/:id', (req, res) => {
//   res;
// });

module.exports = router;
