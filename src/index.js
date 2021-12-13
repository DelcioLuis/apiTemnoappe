const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")


require('dotenv').config()

const deviceRoutes = require("./routes/routes")

const app = express()

app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    return next()
})
  

//Routes declarations
app.use('/api', deviceRoutes)

//Global error handling
app.use((error, req, res, next)=>{
    const status = error.statusCode || 500
    const message = error.message || "Uncaught error"
    //Email if error 500
    res.status(status).json({
        message: message
    })
})

app.get('/register-manager/', (req, res, next)=> {
    res.send('<h1 style="text-align: center">This is the Temnoappe APi!</h1>')
})



module.exports = {
    app
}