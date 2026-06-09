const express = require('express');
const { registerUser, verifyOTP, loginUser, getUsers } = require('../controllers/authController');
const { protect } = require('../middleware/authmiddleware');
const { admin } = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);

module.exports = router;