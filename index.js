
require('dotenv').config()
const express = require('express')
const server = express()
server.use(express.json())


server.get('/',  (req,res) =>{
    res.json({message:'Web46 rocks!'})
})
server.get('/hello', (req,res) =>{
    res.send('<h1>HELLO WORLD</h1>')
}) 
const port = process.env.port || 3000
server.listen(port, () =>{
    console.log(`listening on ${port}`)
})