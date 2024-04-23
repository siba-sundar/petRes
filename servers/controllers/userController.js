const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.getUserByUsername = async (req, res) => {
  try {
      const { username } = req.params;
      const user = await User.findOne({ username });

      if (!user) {
          return res.status(404).json({ error: 'No such user' });
      }

      res.json({
          username: user.username,
          email: user.email,
          password: user.password // Note: You might not want to return the password in a real-world scenario
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

/*   exports.loginUser = async (req, res) => {
      try {
          const { username } = req.params;
          const user = await User.findOne({ username });
    
          if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }
  
          res.json(user);
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
  };
   */

exports.checkExists = async (req, res) => {
  const { username, email } = req.query;

  try {
    let exists = false;

    if (username) {
      const user = await User.findOne({ username });
      exists = !!user;
    } else if (email) {
      const user = await User.findOne({ email });
      exists = !!user;
    }

    res.json({ exists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

