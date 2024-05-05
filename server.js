const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')



// dot config
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


// ROUTES
// First test route
app.use('/api.v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth' , require('./routes/authRoutes'))


// mongoose connect
mongoose.connect('mongodb://localhost:27017/')

// port
const PORT = process.env.PORT || 5000

// listen 
app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgBlue.white)
})