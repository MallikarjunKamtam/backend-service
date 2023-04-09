const express = require('express')
const router = express.Router()
const { editColors, getColors, postColors } = require('../controllers/colors')

router.route('/').get(getColors).post(postColors)
router.route('/:id').put(editColors)

module.exports = router
