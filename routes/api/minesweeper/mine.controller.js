const init = (req, res, next) => {
    var row = parseInt(req.query.row),
        mineCount = parseInt(req.query.mineCount)
    var matrix = []
    for(var i = 0; i < row; i++){
        matrix[i] = []
        for(var j = 0; j < row; j++){
            matrix[i][j] = {
                value : 0,
                isCheck : false
            }
        }
    }
    var setMineCount = 0
    while(true){
        var xpos = Math.floor(Math.random()*row)
        var ypos = Math.floor(Math.random()*row)
        if(matrix[xpos][ypos].value !== 'MINE'){
            matrix[xpos][ypos].value = 'MINE'
            for(var i = xpos-1; i <= xpos+1; i++ ){
                for(var j = ypos-1; j <= ypos+1; j++ ){
                    if(i >= 0 && j >= 0 && i < row && j < row && matrix[i][j].value !== 'MINE'){
                        matrix[i][j].value++
                    }
                }
            }
            setMineCount++
        }
        if(setMineCount == mineCount) break
    }
    res.json({success:true, matrix})
}

module.exports = {
    init
}