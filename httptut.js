const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end("Welcome to home")
    }
    if(req.url === '/about') {
        res.end("Welcome to about")
    }
    res.end(`<h1> Come on bro, put correct url , go back to <a href= '/'>Go back simon</a></h1>`)
})

server.listen(5000)