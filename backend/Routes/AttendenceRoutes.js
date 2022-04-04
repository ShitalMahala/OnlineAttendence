const express = require('express')
const router = express.Router()
const {create,addAttendence, getallattendence} = require('../Controllers/AttendenceController')

router.route('/create').post(create)
router.route('/add').post(addAttendence)
router.route('/all').get(getallattendence)


module.exports = router