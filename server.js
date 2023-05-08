const dotenv = require('dotenv')
dotenv.config({path: './.env'})
const express = require('express')
const connectDB = require('./src/config/db')

connectDB()
const app = express()
const authentication  = require('./src/routes/Authentication')

app.use('/api/v1/auth', authentication)

app.listen('4500', () => console.log('Server Connnected!'))