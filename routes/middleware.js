const CustomError = require('../addons/customError')

const invalidData = (req, res, next)=>{
    const row = parseInt(req.query.row),
        mineCount = parseInt(req.query.mineCount)
    if(row < 1 || mineCount < 1) return next(new CustomError('Row and number of mines cannot be zero or minus'), 409)
    if(row * row <= mineCount) return next(new CustomError('The number of mines is wrong.'), 409)
    next()
}

module.exports = {
    invalidData,
}