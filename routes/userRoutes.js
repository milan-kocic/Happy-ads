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

// Get single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//add user

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

// Update user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
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
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});
// Delete idea
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});
module.exports = router;
