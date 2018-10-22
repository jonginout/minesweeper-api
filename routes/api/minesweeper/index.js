const router = require('express').Router()
const controller = require('./mine.controller')
const middle = require('../../middleware')

router.get('/init', middle.invalidData, controller.init)

module.exports = router