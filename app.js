// import libs

const express = require('express')
const { restart } = require('nodemon')
const app = express()

const movieRoute = require('./routes/movies')
const userRoute = require('./routes/users')

// middleware

app.use('/movies', movieRoute)
app.use('/users', userRoute)


// routes

app.get('/', (req, res)=> {
    res.send('You are on your homepage!')
})

// create server

app.listen(3000, ()=>{
    console.log('Server started...')
})