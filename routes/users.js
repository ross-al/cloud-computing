const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('You are in users!')
})

router.get('/stelios', (req,res)=>{
    res.send("You are on Ross's home page!")
})

module.exports = router