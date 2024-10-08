const express = require('express')
const cors = require('cors')
const { loginUser, signupUser } = require('../controllers/userControllers')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

//Login
router.post('/login', loginUser)

//Signup
router.post('/signup', signupUser)

module.exports = router