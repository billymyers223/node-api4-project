
require('dotenv').config()
console.log(process.env.PORT, process.env.NODE_ENV)
const server = require('./api/server')

const port = process.env.PORT || 3000
server.listen(port, () =>{
    console.log(`listening on ${port}`)
})