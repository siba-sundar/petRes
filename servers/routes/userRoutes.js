/* const express = require("express");
const userController = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", userController.register);

module.exports = router;
 */


const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController.js");
// const { registerUser } = require('../controllers/userController');

// POST /api/users/register
router.get('/get',userController.getAll)
router.post('/register', userController.registerUser);
router.get('/login/:username', userController.getUserByUsername);
router.get('/exists', userController.checkExists);

module.exports = router;
