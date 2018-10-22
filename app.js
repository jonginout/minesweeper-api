const express = require('express')
const app = express()
const config = require('./config')
const port = config.port

// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

app.use((req, res, next)=>{
    const allowedOrigins = ['http://localhost:8080']
    const origin = req.headers.origin
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
        res.setHeader('Access-Control-Allow-Credentials', true)
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use('/api', require('./routes/api'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err) res.status(err.status || 500)
    res.json({
      success : false,
      message: err.message,
      error: err
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
