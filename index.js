
// 1 load.env file
require('dotenv').config()


// 2 import express
const express = require('express')

// 6 import cors  -- to connect6 two different ports
const cors = require('cors')

const db = require('./DB/connection')

const router = require('./Routes/router')
// const ApplicationMiddlewares = require('./Middlewares/ApplicationMiddleware')
// 3 create application using express

const serverApp = express()

// 7 use 
serverApp.use(cors())
serverApp.use(express.json())
// serverApp.use(ApplicationMiddlewares)
serverApp.use(router)

//export image from backend to frontend
serverApp.use('/uploads',express.static('./uploads'))

// 4 define port
const PORT = 3000 || process.env.PORT

// 5 run the server app
serverApp.listen(PORT,()=>{
    console.log('serverApp is running on PORT: ' +PORT);
    
})


serverApp.get('/',(req,res)=>{
    res.send("welcome to server")
})