const express = require('express')
const { createStudent, allstudents } = require('../Controllers/StudentController')
const router = express.Router()

router.route('/new').post(createStudent)
router.route('/all').get(allstudents)

module.exports = router