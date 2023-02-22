const path = require('path');
const express = require('express');

require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

const connectDB = require('./config/db');

connectDB();
//static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersRouter = require('./routes/userRoutes');
app.use('/api/users', usersRouter);
app.listen(port, console.log(`Server listening  on port ${port}...`));
