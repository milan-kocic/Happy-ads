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
    console.log(error);
    res.status(500).json({ succes: false, error: 'Something  went wrong' });
  }
});

// get one user

// router.get('/:id', (req, res) => {
//   res;
// });
// post one ad
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    adress: req.body.adress,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    admin: req.body.admin,
  });
  try {
    const savedUser = await user.save();
    res.json({ succes: true, data: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: 'Something went wrong.' });
  }
});

module.exports = router;
