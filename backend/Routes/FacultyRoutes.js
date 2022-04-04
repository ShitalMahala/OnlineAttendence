const express = require('express')
const router = express.Router()
const {login,register,logout,all} = require('../Controllers/FacultyController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/all').get(all)


module.exports = router
