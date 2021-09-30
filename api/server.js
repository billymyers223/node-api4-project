const express = require('express')
const server = express();
server.use(express.json())


server.get('/',  (req,res) =>{
    res.json({message:'Web46 rocks!'})
})
server.get('/hello', (req,res) =>{
    res.send('<h1>HELLO WORLD</h1>')
}) 

module.exports = server;