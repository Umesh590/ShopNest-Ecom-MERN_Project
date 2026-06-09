// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const sendEmail = require('../utils/sendEmail');
// 
// const generateToken = (id) => {
  // return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };
// 
// const registerUser = async (req, res) => {
  // try {
    // const { name, email, password } = req.body;
    // 
    // const userExists = await User.findOne({ email });
    // // if (userExists) return res.status(400).json({ message: 'User already exists' });
// 
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
// 
    // const user = await User.create({ name, email, password: hashedPassword });
    // if (user) {
      // 
      // Generate a mock OTP
      // const otp = Math.floor(100000 + Math.random() * 900000);
      // 
      // Send Welcome / OTP Email
      // const message = `
        // <h2>Welcome to ShopNest, ${name}!</h2>
        // <p>Thank you for registering on our platform.</p>
        // // <p>Your one-time verification/discount OTP is: <strong>${otp}</strong></p>
      // `;
// 
      // await sendEmail({
        // email: user.email,
        // subject: 'Welcome to ShopNest - Your OTP',
        // message
      // });
// 
      // res.status(201).json({
        // _id: user._id,
        // name: user.name,
        // email: user.email,
        // role: user.role,
        // token: generateToken(user._id)
      // });
    // } else {
      // res.status(400).json({ message: 'Invalid user data' });
    // }
  // } catch (error) {
    // res.status(500).json({ message: error.message });
  // }
// };
// 
// const loginUser = async (req, res) => {
  // 
  // try {
    // const { email, password } = req.body;
    // const user = await User.findOne({ email });
// 
    // if (user && (await bcrypt.compare(password, user.password))) {
      // res.json({
        // _id: user._id,
        // name: user.name,
        // email: user.email,
        // role: user.role,
        // token: generateToken(user._id)
      // });
    // } else {
      // res.status(401).json({ message: 'Invalid email or password' });
    // }
  // } catch (error) {
    // res.status(500).json({ message: error.message });
  // }
// };
// 
// const getUsers = async (req, res) => {
  //  console.log("getUsers controller hit");
  // try {
    // const users = await User.find({}).select('-password');
    // res.json(users);
  // } catch (error) {
    // res.status(500).json({ message: error.message });
  // }
// };
// 
// module.exports = { registerUser, loginUser, getUsers };
// 

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpire: Date.now() + 5 * 60 * 1000,
      verified: false,
    });

    const message = `
      <h2>Welcome to ShopNest, ${name}!</h2>
      <p>Your OTP for email verification is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `;

    await sendEmail({
      email: user.email,
      subject: 'ShopNest Email Verification',
      message,
    });

    res.status(201).json({
      message: 'OTP sent successfully',
      email: user.email,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: 'Invalid OTP'
      });
    }

    if (user.otpExpire < Date.now()) {
      return res.status(400).json({
        message: 'OTP expired'
      });
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save();

    res.status(200).json({
      message: 'Email verified successfully'
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    if (!user.verified) {
      return res.status(401).json({
        message: 'Please verify your email first',
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  verifyOTP,
  loginUser,
  getUsers,
};