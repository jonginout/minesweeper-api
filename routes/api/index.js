const router = require('express').Router()
const minesweeper = require('./minesweeper')

router.use('/mine', minesweeper)

module.exports = router