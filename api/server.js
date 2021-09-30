const express = require('express')
const server = express();
server.use(express.json())
const cors = require('cors')


const data = [{
    username: 'billymyers223',
    password: 'pass',
    id:1
}]

server.get('/',  (req,res) =>{
    res.json({message:'Web46 rocks!'})
})
server.get('/api/hello', (req,res) =>{
    res.send('<h1>HELLO WORLD</h1>')
}) 

server.use((err,req,res,next) =>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.get('/api/users', (req,res) =>{
    res.status(200).json(data);
})

module.exports = server;